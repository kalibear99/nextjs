import {prisma} from "@/lib/prisma"
import Todo from "../todo";

export default async function HomePage() {
    const users = await prisma.user.findMany();
    console.log(users)
    return (
         <main className="flex items-center justify-center  h-screen bg-white">
            <div>
                <Todo/>
            </div>
        </main>
    )
}