import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface Task {
  id: string
  title: string
  done: boolean
}

interface TaskListState {
  tasks: Task[]
}

const initialState: TaskListState = {
  tasks: localStorage.getItem('tasks')
    ? JSON.parse(localStorage.getItem('tasks') || '[]')
    : [],
}

const taskSlice = createSlice({
  name: 'taskList',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      state.tasks.push(action.payload)
      localStorage.setItem('tasks', JSON.stringify(state.tasks))
    },
    removeTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload)
      localStorage.setItem('tasks', JSON.stringify(state.tasks))
    },
    toggleDone: (state, action: PayloadAction<string>) => {
      const task = state.tasks.find((task) => task.id === action.payload)
      if (task) {
        task.done = !task.done
        localStorage.setItem('tasks', JSON.stringify(state.tasks))
      }
    },
  },
})

export const { addTask, removeTask, toggleDone } = taskSlice.actions
export default taskSlice.reducer
