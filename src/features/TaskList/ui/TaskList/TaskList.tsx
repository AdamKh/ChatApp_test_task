import type React from 'react'
import { useAppDispatch, useAppSelector } from '@app/store/hooks'
import type { RootState } from '@app/store/store'
import { reorderTasks } from '@features/TaskList/model/slice'
import { selectFilteredTasks } from '@features/TaskList/model/selectors'
import TaskItem from '../TaskItem/TaskItem'
import TaskInput from '../TaskInput/TaskInput'
import TaskFilter from '../TaskFilter/TaskFilter'
import {
  closestCorners,
  DndContext,
  PointerSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core'
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'
import styles from './TaskList.module.scss'

const TaskList: React.FC = () => {
  const dispatch = useAppDispatch()
  const tasks = useAppSelector(selectFilteredTasks)

  const handleDragEnd = (e: any) => {
    const { active, over } = e

    if (active.id !== over.id) {
      const oldIndex = tasks.findIndex((task) => task.id === active.id)
      const newIndex = tasks.findIndex((task) => task.id === over.id)
      dispatch(reorderTasks({ oldIndex, newIndex }))
    }
  }

  const sensors = useSensors(useSensor(PointerSensor), useSensor(TouchSensor))

  return (
    <div className={styles.taskList}>
      <TaskInput />
      <TaskFilter />
      <DndContext
        collisionDetection={closestCorners}
        onDragEnd={handleDragEnd}
        sensors={sensors}
      >
        <SortableContext items={tasks} strategy={verticalListSortingStrategy}>
          {tasks.map((task) => {
            return <TaskItem key={task.id} id={task.id} title={task.title} />
          })}
        </SortableContext>
      </DndContext>
    </div>
  )
}

export default TaskList
