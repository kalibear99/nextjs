import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '@/app/db';
 
export default async function handler( 
req: NextApiRequest,
res: NextApiResponse
 ) {
const todoId = Number(req.query.id);
 
if (req.method === 'DELETE') {
const todo = await prisma.todo.delete({
where: { id: todoId },
});
res.json(todo);
}
}