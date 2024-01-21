import React from 'react';
// import { useSelector } from 'react-redux';
// import { selectTasks } from '@/redux/tasksSlice';

interface Task {
  id: React.Key;
  title: string;
  description: string;
  dueDate: string;
  status: 'pending' | 'completed';
}


const TaskList: React.FC = () => {
    const tasks: Task[] = [
      {
        id: 1,
        title: 'Sample Task 1',
        description: 'Description for Task 1',
        dueDate: '2022-12-31',
        status: 'pending',
      },
      {
        id: 2,
        title: 'Sample Task 2',
        description: 'Description for Task 2',
        dueDate: '2022-12-31',
        status: 'completed',
      },
      
    ];

    //  const tasks = useSelector(selectTasks) || task;

  return (
    <div className='h-full w-full'>
        <h2>Task List</h2>
        <ul>
            {tasks.map((task) => (
            <li key={task.id}>
                <strong>{task.title}</strong>
                <p>{task.description}</p>
                <p>Due Date: {task.dueDate}</p>
                <p>Status: {task.status}</p>
            </li>
            ))}
        </ul>
    </div>

  );
};

export default TaskList;
