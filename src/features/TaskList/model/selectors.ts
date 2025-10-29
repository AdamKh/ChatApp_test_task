import { createSelector } from '@reduxjs/toolkit'
import type { RootState } from '@app/store/store'

export const selectTasks = (state: RootState) => state.taskList.tasks
export const selectFilter = (state: RootState) => state.taskList.filter

export const selectFilteredTasks = createSelector(
  [selectTasks, selectFilter],
  (tasks, filter) => {
    switch (filter) {
      case 'completed':
        return tasks.filter((task) => task.done)
      case 'active':
        return tasks.filter((task) => !task.done)
      default:
        return tasks
    }
  }
)
