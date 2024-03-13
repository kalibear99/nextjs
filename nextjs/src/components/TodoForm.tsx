"use client"

import { useState, FormEvent } from 'react';
import { addTodo } from '../lib/prisma';

export default function TodoForm() {
  const [title, setBody] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleAddTodo = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      if(title.length > 0){
        const todo = await addTodo(title.toString());
        setBody('');
      }
      
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false);
  };

  return (
    <form onSubmit={handleAddTodo} className='flex '>

      <input
        type='text'
        name='body'
        value={title}
        onChange={(e) => setBody(e.target.value)}
        className='border-2 border-blue-500 w-96 outline-none text-white bg-black text-center'
        placeholder='Věci které musíš udělat ty sráči :) '
      />

      <input        
        type='submit'
        className='p-2 ml-auto bg-blue-500 hover:bg-blue-700 rounded-md text-white cursor-pointer '
        value={isLoading ? 'Adding Todo...' : 'Přidat věci'}
        disabled={isLoading}
      />


    </form>
  );
}