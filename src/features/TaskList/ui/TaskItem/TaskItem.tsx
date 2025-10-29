import type React from 'react'
import { useAppDispatch, useAppSelector } from '@app/store/hooks'
import type { RootState } from '@app/store/store'
import { removeTask, toggleDone } from '@features/TaskList/model/slice'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import dragHandleIcon from '@shared/assets/icons/drag-handle.svg'
import styles from './TaskItem.module.scss'

interface TaskItemProps {
  id: string
  title: string
}

const TaskItem: React.FC<TaskItemProps> = ({ id, title }) => {
  const done = useAppSelector(
    (state: RootState) =>
      state.taskList.tasks.find((task) => task.id === id)?.done
  )
  const filter = useAppSelector((state: RootState) => state.taskList.filter)
  const dispatch = useAppDispatch()

  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id })
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  }

  const handleRemoveTask = () => {
    dispatch(removeTask(id))
  }
  const handleToggleDone = () => {
    dispatch(toggleDone(id))
  }

  return (
    <div className={styles.taskItem} ref={setNodeRef} style={style}>
      <div className={styles.taskItemContent}>
        <img
          className={filter == 'all' ? styles.taskDragHandle : styles.hide}
          {...listeners}
          {...attributes}
          src={dragHandleIcon}
          alt="Drag Handle"
          width={25}
        />
        <input
          id={`taskCheckbox-${id}`}
          name="taskCheckbox"
          type="checkbox"
          className={styles.taskCheckbox}
          onChange={handleToggleDone}
          checked={done}
        />

        <label htmlFor={`taskCheckbox-${id}`}>
          <p className={done ? styles.dashed : ''}>{title}</p>
        </label>
      </div>
      <button onClick={handleRemoveTask}>Удалить</button>
    </div>
  )
}

export default TaskItem
