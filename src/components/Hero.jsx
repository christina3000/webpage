export default function Hero() {
    return (
      <section className="flex flex-col md:flex-row items-center justify-between p-6 bg-white">
        <div className="max-w-xl space-y-4">
          <h1 className="text-2xl font-bold text-gray-900">Hi, I am Christina,<br />Software Developer</h1>
          <p className="text-gray-600 text-sm">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint...</p>
          <button className="bg-red-500 text-white px-4 py-2 rounded">Download Resume</button>
        </div>
        <img className="w-32 h-32 rounded-full mt-6 md:mt-0" src="/me2.png" alt="chris" />
      </section> 
    );
  }