import type React from 'react'
import { useAppDispatch, useAppSelector } from '@app/store/hooks'
import type { RootState } from '@app/store/store'
import { removeTask, toggleDone } from '@features/TaskList/model/slice'
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
  const dispatch = useAppDispatch()

  const handleRemoveTask = () => {
    dispatch(removeTask(id))
  }
  const handleToggleDone = () => {
    dispatch(toggleDone(id))
  }

  return (
    <div className={styles.taskItem}>
      <div className={styles.taskItemContent}>
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
