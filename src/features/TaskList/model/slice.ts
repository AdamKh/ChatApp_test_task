import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface Task {
  id: string
  title: string
  done: boolean
}

interface TaskListState {
  tasks: Task[]
  filter: 'all' | 'completed' | 'active'
}

const initialState: TaskListState = {
  tasks: localStorage.getItem('tasks')
    ? JSON.parse(localStorage.getItem('tasks') || '[]')
    : [],
  filter: 'all',
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

    reorderTasks: (
      state,
      action: PayloadAction<{ oldIndex: number; newIndex: number }>
    ) => {
      const { oldIndex, newIndex } = action.payload
      const [movedTask] = state.tasks.splice(oldIndex, 1)
      state.tasks.splice(newIndex, 0, movedTask)
      localStorage.setItem('tasks', JSON.stringify(state.tasks))
    },

    changeFilter: (
      state,
      action: PayloadAction<'all' | 'completed' | 'active'>
    ) => {
      state.filter = action.payload
    },
  },
})

export const { addTask, removeTask, toggleDone, reorderTasks, changeFilter } =
  taskSlice.actions
export default taskSlice.reducer
