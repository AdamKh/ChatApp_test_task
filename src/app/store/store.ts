import { configureStore } from '@reduxjs/toolkit'
import taskListReducer from '@features/TaskList/model/slice'

const store = configureStore({
  reducer: {
    taskList: taskListReducer,
  },
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
