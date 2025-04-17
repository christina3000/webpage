// export default function Navbar() {
//     return (
//       <nav className="flex justify-end space-x-6 p-6 font-medium text-gray-700">
//         <a href="#">Works</a>
//         <a href="#">Blog</a>
//         <a href="#">Contact</a>
//       </nav>
//     );
//   }

import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="flex justify-end space-x-6 p-6 font-medium text-gray-700">
      <Link to="/works">Works</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/Blog2">Blog2</Link>
      <Link to="/contact">Contact</Link>
      {/* <Link to ="/ShowcasePage">ShowcasePage</Link> */}
    </nav>
  );
}