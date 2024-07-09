import { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

export default function DropDownMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-center">
      <div className=''>
        <button
          onClick={toggleMenu}
          className="h-12 inline-flex justify-center items-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        >
          GET
          <ChevronDownIcon aria-hidden="true" className="-mr-1 h-5 w-5 text-gray-400" />
        </button>
      </div>

      {isOpen && (
        <div className="absolute text-left left-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 max-h-64 overflow-y-auto focus:outline-none">
          <div className="py-1">
            <a
              href="#"
              className="block px-4 py-2 text-sm  font-semibold hover:bg-gray-100 hover:text-gray-900 text-green-500"
            >
              GET
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm  font-semibold hover:bg-gray-100 hover:text-gray-900 text-yellow-500"
            >
              PUT
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm  font-semibold hover:bg-gray-100 hover:text-gray-900 text-blue-500"
            >
              POST
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm  font-semibold hover:bg-gray-100 hover:text-gray-900 text-red-500"
            >
              DELETE
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm  font-semibold hover:bg-gray-100 hover:text-gray-900 text-orange-500"
            >
              PATCH
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
