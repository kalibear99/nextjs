import { prisma } from '@/app/db';
import { NextApiRequest, NextApiResponse } from 'next';

	 
export default async function handler( 
	req: NextApiRequest,
	res: NextApiResponse
	 ) {
	if (req.method === 'GET') {
	const todos = await prisma.todo.findMany();
	res.json(todos);
	} else if (req.method === 'POST') {
	const { title, content, published, user, authorId} = req.body;
	const todo = await prisma.todo.create({
	data: {
        title,
        content: content,
        published: published,
		authorId:authorId,
		author: user
	},
	});
	res.json(todo);
	}
}