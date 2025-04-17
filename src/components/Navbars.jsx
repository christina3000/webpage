import { Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white shadow">
      <div className="w-10 h-10 bg-gray-200"></div> {/* Placeholder for logo */}
      <Menu className="w-6 h-6 text-gray-700 cursor-pointer" />
    </nav>
  );
}