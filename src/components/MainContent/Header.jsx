import { Link } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { Avatar } from 'flowbite-react';

export function Header() {
  return (
    <header className="bg-gray-900 shadow px-4 border-b-2 border-black">
      <div className="container mx-auto px-2 py-2 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-xl  text-white">
          Home
        </Link>

        <div className="flex items-center space-x-4">
          <Link to="/profile" className="">
            <Avatar  placeholderInitials="YT" rounded/>
          </Link>
          <Link to="/settings" className="text-white">
            <FiSettings className="text-2xl" />
          </Link>
        </div>
      </div>
    </header>
  );
}