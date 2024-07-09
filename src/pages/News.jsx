import React, { useState, useEffect } from 'react';
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md';
import DOMPurify from 'dompurify';
import NewsCard from '../components/news/NewsCard';
import LoadingScreen from '../conditions/LoadingScreen';

// Mock data for news (replace with actual data or fetch from an API as needed)
const mockNews = [
  {
    id: 1,
    title: 'Lorem Ipsum',
    date: '2024-07-08',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 2,
    title: 'Dolor Sit Amet',
    date: '2024-07-07',
    content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  // Add more mocked news items as needed
];

export default function News() {
  const [news, setNews] = useState(mockNews); // State for storing news
  const [searchInput, setSearchInput] = useState(''); // State for search input
  const [currentPage, setCurrentPage] = useState(1); // State for current page

  // Effect to simulate loading or fetch data (mocked here)
  useEffect(() => {
    // You can replace this with an actual API call if needed
    // fetchNewsData();
  }, []);

  // Mock function to fetch news (replace with actual API call)
  // const fetchNewsData = async () => {
  //   try {
  //     // Replace with actual API call to fetch news data
  //     const data = await fetchNews();
  //     setNews(data);
  //   } catch (error) {
  //     console.error('Error fetching news:', error);
  //   }
  // };

  // Function to handle search input change
  const handleSearchInput = (event) => {
    setSearchInput(event.target.value);
    setCurrentPage(1); // Reset page to 1 when search input changes
  };

  // Function to handle pagination
  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo(10, 0); // Scroll to top when changing page
  };

  // Constants for pagination
  const itemsPerPage = 2;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Filtered and paginated news based on search input and current page
  const filteredNews = news.filter((item) =>
    item.title.toLowerCase().includes(searchInput.toLowerCase())
  );
  const paginatedNews = filteredNews.slice(startIndex, endIndex);

  // Total pages calculation
  const totalPages = Math.ceil(filteredNews.length / itemsPerPage);

  // Display loading screen if news data is being fetched (mocked here)
  if (news.length === 0) {
    return <LoadingScreen />;
  }

  // Content based on filtered news count
  let content;
  if (filteredNews.length === 0) {
    content = (
      <p className="flex justify-center my-12 text-lg">
        No matching news found with title `
        {searchInput}
        `
      </p>
    );
  } else {
    content = <NewsCard currentItems={paginatedNews} />;
  }

  // Array for page numbers
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="relative">
      {/* Background image section */}
      <div
        className="bg-cover bg-center bg-no-repeat h-72 flex items-center"
        style={{
          backgroundImage:
            'url(https://synaxtech.com/wp-content/uploads/2021/02/bg-number.jpg?_t=1673358156)',
        }}
      >
        <div className="container mx-auto py-12 sm:px-6 lg:px-8 w-4/5 flex items-center justify-start">
          <h1 className="text-4xl sm:text-5xl md:text-6xl bg-raleway-700-6xl text-white text-left">
            News
          </h1>
        </div>
      </div>

      {/* Search input section */}
      <div className="absolute top-36 right-24">
        <div action="" className="relative mx-auto w-max">
          <input
            type="text"
            id="topbar-search"
            className="peer cursor-pointer relative z-10 h-12 text-white w-12 rounded-full border bg-transparent pl-12 outline-none focus:w-full focus:cursor-text focus:border-white focus:pl-16 focus:pr-4"
            value={searchInput}
            onChange={handleSearchInput}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute inset-y-0 my-auto h-8 w-12 border-r border-transparent stroke-gray-50 px-3.5 peer-focus:border-white peer-focus:stroke-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>

      {/* News content section */}
      {content}

      {/* Pagination section */}
      <div className="flex justify-center mt-5 mb-4">
        {currentPage !== 1 && (
          <button
            className="px-5 py-2 mx-1 bg-gray-200 text-gray-700 rounded-md h-full hover:bg-gray-400"
            onClick={() => handlePageChange(currentPage - 1)}
          >
            <MdOutlineKeyboardArrowLeft color="gray" />
          </button>
        )}

        {pageNumbers.map((number) => (
          <button
            key={number}
            className={`px-4 py-2 mx-1 ${
              currentPage === number
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-400 hover:text-white'
            } rounded-md`}
            onClick={() => handlePageChange(number)}
          >
            {number}
          </button>
        ))}

        {currentPage !== totalPages && (
          <button
            className="px-5 py-2 mx-1 bg-gray-200 text-gray-700 rounded-md h-full hover:bg-gray-400"
            onClick={() => handlePageChange(currentPage + 1)}
          >
            <MdOutlineKeyboardArrowRight color="gray" />
          </button>
        )}
      </div>
    </div>
  );
}
