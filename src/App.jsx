// import Navbar from './components/Navbar';
// import Hero from './components/Hero';
// import RecentPosts from './components/RecentPosts';

// function App() {
//   return (
//     <div className="font-sans">
//       <Navbar />
//       <Hero />
//       <RecentPosts />
//     </div>
//   );
// }

// export default App;

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import RecentPosts from './components/RecentPosts';
import Works from './pages/Works';
import Blog from './pages/Blog';
import Blog2 from './pages/Blog2';
import Contact from './pages/Contact';
import ShowcasePage from './pages/ShowcasePage';
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={ <><Hero /><RecentPosts /></>} />
        <Route path="/works" element={<Works />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/Blog2" element={<Blog2 />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/showcase" element={<ShowcasePage />} />
      </Routes>
    </Router>
  );
}

export default App;