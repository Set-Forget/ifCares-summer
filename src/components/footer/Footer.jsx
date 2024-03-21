import { useRouter } from 'next/navigation';
import React from 'react';

const Footer = () => {
  const router = useRouter()
  const logout = () => {
    // Clear the user cookie
    document.cookie = 'ifcaresSummer=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    // Redirect to the login page
    router.push('/auth/login');
  };
  return (
    <footer className="fixed md:relative bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow flex items-center justify-between md:p-6">
      <span className="text-sm text-gray-500 sm:text-center">
        Name Surname
      </span>
      <span className="flex items-center justify-center text-sm font-medium text-gray-500">
        <button onClick={logout} className="hover:text-black flex items-center gap-1">
          Logout
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"
            />
          </svg>
        </button>
      </span>
    </footer>
  );
};

export default Footer;
