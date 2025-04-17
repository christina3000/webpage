 import React from 'react';
 import Post from './pages/Post';
// const posts = [
//   {
//     id: 1,
//     title: "Making a design system from scratch",
//     date: "12 Feb 2020",
//     tags: "Design, Pattern",
//     description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
//   },
//   {
//     id: 2,
//     title: "Creating pixel perfect icons in Figma",
//     date: "12 Feb 2020",
//     tags: "Figma, Icon Design",
//     description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
//   },
// ];

// export default Post;

// import React from 'react';
// ;
// import posts from '../data/posts';
// export default function Post() {
//   return (
//     <div>
//       {posts.map(post => (
//         <article key={post.id}>
//           <h2>{post.title}</h2>
//           {/* … */}
//         </article>
//       ))}
//     </div>
//   );
// }
const  Post = [
    {
      id: '1',
      title: 'Making a design system from scratch',
      date: '12 Feb 2020',
      category: 'Design, Pattern',
      content: 'This is a sample blog post about building a design system...',
    },
    {
      id: '2',
      title: 'Creating pixel-perfect icons in Figma',
      date: '18 Feb 2020',
      category: 'Figma, Icon Design',
      content: 'A guide to making icons that scale beautifully...',
    },
  ];
  
  export default Post;