import React from 'react';

const ProjectCard = ({ filteredData, openModal, shouldAnimate }) => {
  // Handle case where filteredData is undefined or empty
  if (!filteredData || filteredData.length === 0) {
    return (
      <div className="text-center text-gray-500 py-4">
        No projects found.
      </div>
    );
  }

  return (
    <>
      {filteredData.map((data, index) => (
        <div
          onClick={() => openModal(data.id)}
          key={data.id}
          className={`w-auto h-fit group bg-white hover:drop-shadow-xl hover:shadow-inner rounded-lg shadow-lg overflow-hidden flex flex-col justify-start items-start p-0 m-0 ${
            shouldAnimate ? 'animate-fade-in duration-300' : ''
          }`}
          style={{ animationDelay: `${index * 200}ms` }}
        >
          <div className="relative w-full object-cover flex flex-col justify-start items-start overflow-hidden">
            <img
              className="object-center object-cover h-36 w-full opacity-1 transition duration-300 ease-in-out group-hover:opacity-50 transform group-hover:scale-105"
              src={data.picture}
              alt=""
            />
            <div className="invisible group-hover:visible duration-100 ease-in-out absolute text-5xl text-black top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              {/* Your content here */}
            </div>
          </div>
          <div className="text-start px-2 flex flex-col justify-start items-start mb-2">
            <p className="text-lg text-blue-700 font-poppins my-2 line-clamp-2">{data.title}</p>
            <p className="text-sm text-gray-500 font-poppins mb-2 line-clamp-1">{data.body}</p>
            <button className="text-sm text-blue-500 hover:text-red-600 focus:outline-none">Read More</button>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProjectCard;
