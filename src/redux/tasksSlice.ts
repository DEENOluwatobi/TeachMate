import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import { v4 as uuidv4 } from 'uuid';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

interface Task {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  status: 'pending' | 'completed';
}

interface TasksState {
  tasks: Task[];
  filter: 'all' | 'pending' | 'completed';
}

const initialState: TasksState = {
  tasks: [],
  filter: 'all',
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Omit<Task, 'id'>>) => {
      const newTask: Task = {
        id: uuidv4(),
        ...action.payload,
      };
      state.tasks.push(newTask);
    },
    editTask: (state, action: PayloadAction<Task>) => {
      const index = state.tasks.findIndex((task) => task.id === action.payload.id);
      if (index !== -1) {
        state.tasks[index] = action.payload;
      }
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    setFilter: (state, action: PayloadAction<'all' | 'pending' | 'completed'>) => {
      state.filter = action.payload;
    },
  },
});

// Configure redux-persist for tasks
const persistConfig = {
  key: 'tasks',
  storage,
  whitelist: ['tasks'],
};

export const { addTask, editTask, deleteTask, setFilter } = tasksSlice.actions;

export const selectTasks = (state: RootState) => {
  const { tasks, filter } = state.tasks;
  return filter === 'all' ? tasks : tasks.filter((task) => task.status === filter);
};

export const selectFilter = (state: RootState) => state.tasks.filter;

export default persistReducer(persistConfig, tasksSlice.reducer);
