import { useState } from 'react'
import { useAppDispatch } from '@app/store/hooks'
import styles from './TaskFilter.module.scss'
import { changeFilter } from '../../model/slice'

const TaskFilter: React.FC = () => {
  const dispatch = useAppDispatch()
  const [filterValue, setFilterValue] = useState<string>('all')

  const handleFilterValue = (e: any) => {
    const value = e.target.value
    dispatch(changeFilter(value))
    setFilterValue(value)
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.filterTasks}>
        <p className={styles.filterText}>Filter:</p>
        <select value={filterValue} onChange={handleFilterValue}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="active">Active</option>
        </select>
      </div>

      <button className={styles.deleteAllButton}>
        Удалить все выполненные
      </button>
    </div>
  )
}

export default TaskFilter
