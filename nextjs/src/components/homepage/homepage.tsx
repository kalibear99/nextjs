import {prisma} from "@/lib/prisma"

export default async function HomePage() {
    const users = await prisma.user.findMany();
    console.log(users)
    return (
         <main className="flex items-center justify-center  h-screen bg-white">
            <div className="bg-gray-100 w-1/5 p-6 rounded-md shadow-md">
                <h2 className="text-xl font-bold mb-2 text-blue-500 text-center">Todo</h2>
                <div className="flex justify-center">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">odeslat</button>
                </div>
            </div>
        </main>
    )
}