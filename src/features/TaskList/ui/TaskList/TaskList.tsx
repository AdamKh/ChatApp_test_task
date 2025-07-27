import type React from 'react'
import { useAppSelector } from '@app/store/hooks'
import type { RootState } from '@app/store/store'
import TaskItem from '../TaskItem/TaskItem'
import TaskInput from '../TaskInput/TaskInput'
import styles from './TaskList.module.scss'

const TaskList: React.FC = () => {
  const tasks = useAppSelector((state: RootState) => state.taskList.tasks)

  return (
    <div className={styles.taskList}>
      <TaskInput />
      {tasks.map((task) => {
        return <TaskItem key={task.id} id={task.id} title={task.title} />
      })}
    </div>
  )
}

export default TaskList
