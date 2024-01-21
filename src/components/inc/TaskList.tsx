import { DotMenu } from '@/icons';
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
        <div className='h-full w-full'>
            <table className='w-full'>
                <thead>
                    <tr>
                        <th>S/N</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Due Date</th>
                        <th>Status</th>
                        <th> </th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((task, index) => (
                        <tr key={task.id}>
                            <td>{index + 1}</td>
                            <td>{task.title}</td>
                            <td>{task.description}</td>
                            <td>{task.dueDate}</td>
                            <td>{task.status}</td>
                            <td><DotMenu className='rotate-90' size='md'/></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    </div>

  );
};

export default TaskList;
