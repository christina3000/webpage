// import PostCard from '../components/PostCard';

// export default function Blog2() {
//   const posts = [
//     {
//       title: "Design system from scratch",
//       date: "12 Feb 2020",
//       tags: ["UI", "Design"],
//       excerpt: "Learn how I structured and implemented a design system for client work."
//     },
//     {
//       title: "Why Tailwind CSS is awesome",
//       date: "25 Mar 2020",
//       tags: ["CSS", "Frontend"],
//       excerpt: "Tailwind CSS has become my go-to utility-first CSS framework. Here's why."
//     }
//   ];

//   return (
//     <section className="p-6">
//       <h1 className="text-2xl font-bold mb-6">Blog</h1>
//       <div className="space-y-4">
//         {posts.map((post, i) => (
//           <PostCard key={i} {...post} />
//         ))}
//       </div>
//     </section>
//   );
// }





import React from "react";
import PostCard from '../components/PostCard';

// function Blog2() {
//   return (
//     <div className="min-h-screen bg-yellow-100 flex flex-col justify-between">
//       {/* Footer/Header */}
//       <footer className="bg-white py-6 px-4 text-center">
//         <div className="flex justify-center space-x-6 text-gray-800 text-xl mb-2">
//           <i className="fab fa-facebook-square" />
//           <i className="fab fa-twitter" />
//           <i className="fab fa-instagram" />
//           <i className="fab fa-linkedin" />
//         </div>
//         <p className="text-xs text-gray-600">Copyright ©2020 All rights reserved</p>
//       </footer>

//       {/* Main Content */}
//       <main className="p-10 grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
//         {/* Left Card */}
//         <div className="bg-white p-4 shadow-sm relative">
//           <div className="absolute top-0 right-0 m-4">
//             <div className="w-6 h-6 border-2 border-gray-800 flex flex-col justify-between p-1">
//               <span className="h-0.5 bg-gray-800 block"></span>
//               <span className="h-0.5 bg-gray-800 block"></span>
//               <span className="h-0.5 bg-gray-800 block"></span>
//             </div>
//           </div>
//           <h2 className="font-bold text-gray-800 text-lg mt-10">UI Interactions of the week</h2>
//           <p className="text-sm text-gray-500 mt-1">
//             12 Feb 2019 <span className="mx-2">|</span>
//             <span className="text-blue-500">Express, Handlebars</span>
//           </p>
//           <p className="text-sm text-gray-600 mt-3">
//             Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
//             Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
//           </p>
//         </div>

//         {/* Right Card */}
//         <div className="bg-white p-4 shadow-sm">
//           <img
//             src="https://via.placeholder.com/300x180/000000/FFFFFF/?text=Dashboard"
//             alt="Dashboard"
//             className="rounded mb-4"
//           />
//           <h2 className="font-bold text-gray-800 text-lg">Designing Dashboards</h2>
//           <div className="flex items-center text-sm text-gray-500 mt-1 space-x-2">
//             <span className="bg-blue-900 text-white rounded-full px-2 text-xs">2020</span>
//             <span className="text-yellow-700">Dashboard</span>
//           </div>
//           <p className="text-sm text-gray-600 mt-3">
//             Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
//             Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
//           </p>
//         </div>
//       </main>
//     </div>
//   );

// }
// export default Blog2;
function Blog2() {
  return (
    <div className="min-h-screen bg-yellow-100 flex flex-col justify-between">
      {/* Footer/Header */}
      <footer className="bg-white py-6 px-4 text-center">
        <div className="flex justify-center space-x-6 text-gray-800 text-xl mb-2">
          <i className="fab fa-facebook-square" />
          <i className="fab fa-twitter" />
          <i className="fab fa-instagram" />
          <i className="fab fa-linkedin" />
        </div>
        <p className="text-xs text-gray-600">Copyright ©2020 All rights reserved</p>
      </footer>

      {/* Main Content */}
      <main className="p-10 grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Left Card */}
        <div className="bg-white p-4 shadow-sm relative">
          <div className="absolute top-0 right-0 m-4">
            <div className="w-6 h-6 border-2 border-gray-800 flex flex-col justify-between p-1">
              <span className="h-0.5 bg-gray-800 block"></span>
              <span className="h-0.5 bg-gray-800 block"></span>
              <span className="h-0.5 bg-gray-800 block"></span>
            </div>
          </div>
          <h2 className="font-bold text-gray-800 text-lg mt-10">UI Interactions of the week</h2>
          <p className="text-sm text-gray-500 mt-1">
            12 Feb 2019 <span className="mx-2">|</span>
            <span className="text-blue-500">Express, Handlebars</span>
          </p>
          <p className="text-sm text-gray-600 mt-3">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
            Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
          </p>
        </div>

        {/* Right Card */}
        <div className="bg-white p-4 shadow-sm">
          <img
            src="https://via.placeholder.com/300x180/000000/FFFFFF/?text=Dashboard"
            alt="Dashboard"
            className="rounded mb-4"
          />
          <h2 className="font-bold text-gray-800 text-lg">Designing Dashboards</h2>
          <div className="flex items-center text-sm text-gray-500 mt-1 space-x-2">
            <span className="bg-blue-900 text-white rounded-full px-2 text-xs">2020</span>
            <span className="text-yellow-700">Dashboard</span>
          </div>
          <p className="text-sm text-gray-600 mt-3">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
            Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
          </p>
        </div>
      </main>
    </div>
  );

}
export default Blog2;
