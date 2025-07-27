import { useState, useRef } from 'react'
import { useAppDispatch } from '@app/store/hooks'
import { addTask } from '@features/TaskList/model/slice'
import styles from './TaskInput.module.scss'

const TaskInput: React.FC = () => {
  const dispatch = useAppDispatch()
  const [inputValue, setInputValue] = useState<string>('')
  const inputRef = useRef<HTMLInputElement>(null)

  const handleAddTask = () => {
    if (!inputValue.trim()) return

    dispatch(
      addTask({ id: Date.now().toString(), title: inputValue, done: false })
    )
    setInputValue('')
  }

  return (
    <div className={styles.taskInput}>
      <input
        ref={inputRef}
        type="text"
        placeholder="Введите задачу"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleAddTask()
          }
        }}
        autoFocus
        className={styles.taskInputField}
      />
      <button
        type="button"
        onClick={handleAddTask}
        className={styles.taskInputButton}
      >
        Добавить
      </button>
    </div>
  )
}

export default TaskInput
