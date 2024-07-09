import React from 'react';
import { Link } from 'react-router-dom';
import { BsPerson, BsCalendar } from 'react-icons/bs'; // Importing BsPerson and BsCalendar from react-icons/bs
import DOMPurify from 'dompurify';

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

const JobCard = ({ job }) => (
  <div className="bg-white shadow-lg rounded-lg overflow-hidden">
    <Link to={`#`} onClick={() => window.scrollTo(0, 0)}>
      <img
        className="w-full h-40 object-cover"
        src={job.picture}
        alt={`Job Opening: ${job.title}`}
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">{job.title}</h2>
        <div className="flex items-center text-sm text-gray-600 mt-2">
          <BsPerson className="mr-1" />
          <span>{job.company}</span>
        </div>
        <div className="flex items-center text-sm text-gray-600 mt-1">
          <BsCalendar className="mr-1" />
          <span>{formatDate(job.start_date)}</span>
        </div>
        <p className="text-sm text-gray-700 mt-3 line-clamp-3">
          {DOMPurify.sanitize(`${job.body.slice(0, 120)}${job.body.length > 120 ? '...' : ''}`)}
        </p>
      </div>
    </Link>
  </div>
);

export default JobCard;
