import React, { useState } from "react";
import { books } from "../constants/index";
import { BookOpen, Download, Menu } from "lucide-react"; // Importing icons

const BookSection = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const categories = ["History", "English", "Geography", "Science", "Technology"]; // Example categories

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev); // Toggle sidebar state
  };

  return (
    <div className="flex w-full mx-auto py-16 px-6">
      {/* Left Sidebar for Categories */}
      <aside
        className={`bg-gray-200 p-4 rounded-lg transition-all duration-300 ${
          isSidebarOpen ? "w-2/12" : "w-12 overflow-hidden"
        }`}
      >
        {/* Toggle Button */}
        <button
          onClick={toggleSidebar}
          className="text-gray-700 mb-4 text-center m-0 p-0"
        >
          <Menu className="w-6 h-6" />
        </button>
        {isSidebarOpen && (
          <>
            <h2 className="text-2xl font-bold mb-4">Categories</h2>
            <ul className="space-y-2">
              {categories.map((category, index) => (
                <li
                  key={index}
                  className="text-gray-700 hover:text-orange-500 cursor-pointer"
                >
                  {category}
                </li>
              ))}
            </ul>
          </>
        )}
      </aside>

      {/* Right Side for Books */}
      <main
        className={`flex-1 pl-4 transition-all duration-300 ${
          isSidebarOpen ? "ml-4" : ""
        }`}
      >
        <h2 className="text-3xl font-bold mb-8 text-center">Books Collection</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {books.map((book, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center"
            >
              <img
                src={book.image}
                alt={book.title}
                className="w-full h-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{book.title}</h3>
              <p className="text-gray-600 italic mb-4">{book.author}</p>
              <div className="flex space-x-4">
                {/* Read Button */}
                <a
                  href={book.readLink}
                  className="flex items-center text-gray-700 hover:text-orange-500"
                >
                  <BookOpen className="w-5 h-5 mr-1" /> Read
                </a>
                {/* Download Button */}
                <a
                  href={book.downloadLink}
                  className="flex items-center text-gray-700 hover:text-orange-500"
                >
                  <Download className="w-5 h-5 mr-1" /> Download
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default BookSection;
