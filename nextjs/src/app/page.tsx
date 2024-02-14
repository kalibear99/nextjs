
export default function Home() {
  return (
    <main className="flex items-center justify-center h-screen">
    <div className="bg-gray-100 w-1/5 p-6 rounded-md shadow-md">
      <h2 className="text-xl font-bold mb-2 text-blue-500">Twitter</h2>
      <p className="text-gray-700 mb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed feugiat lectus at nunc luctus, nec convallis elit accumsan.
      </p>
      <div className="flex justify-between">
        <span className="text-blue-500 hover:underline cursor-pointer">Zjistit více</span>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">odeslat</button>
      </div>
    </div>
  </main>
  );
}
