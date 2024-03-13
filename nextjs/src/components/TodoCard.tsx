import React from 'react';
import { delTodo } from '../lib/prisma';
import { time } from 'console';
import { title } from 'process';

type Props = {
  title: string;
  completed?: boolean;
  id: number;
};

function TodoCard({title, completed, id}: Props) {

  async function handleDelete(){
    "use server"
    try {
      const todo = await delTodo(id);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form action={handleDelete}>
      <div className='card select-none cursor-pointer'>
        <div className='flex justify-between'>
          <p className='text-lg font-semibold text-white mt-4'>{title}</p>
          <button className='text-white bg-blue-600 rounded-md p-2 mt-4'>
            {completed ? 'Completed' : 'Smazat'}
          </button>
        </div>
      </div>
    </form>
  );
}

export default TodoCard;