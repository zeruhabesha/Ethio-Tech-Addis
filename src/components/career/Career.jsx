import React from 'react';
import JobCard from './JobCard'; // Import the JobCard component

const Career = () => {
  // Mocked data for jobs
  const jobs = [
    {
      id: 1,
      slug: 'job-slug-1',
      picture: 'https://img.freepik.com/free-vector/app-development-concept-design_23-2148670525.jpg?t=st=1720447234~exp=1720450834~hmac=fc04f8469898f66df0e089e2102c52b0d777fe20606c4a167227e4da6e941cc4&w=1380',
      title: 'Frontend Developer',
      company: 'Tech Co.',
      start_date: '2024-07-08',
      body: 'Develop user-friendly web applications using front-end technologies such as HTML5, CSS3, JavaScript (ES6+), and modern JavaScript frameworks/libraries (React, Angular, Vue.js).',
    },
    {
      id: 2,
      slug: 'job-slug-2',
      picture: 'https://img.freepik.com/free-photo/male-developer-entering-binary-data-terminal-panel_482257-75385.jpg?t=st=1720448194~exp=1720451794~hmac=91883e722dce7175099f35316f49055fedebbda6a4bbd7a565bec94e8cdb0fe3&w=1480',
      title: 'Backend Developer',
      company: 'Software Solutions',
      start_date: '2024-07-07',
      body: 'Design, develop, and maintain scalable backend services, APIs, and systems using modern technologies.',
    },
    // Add more mocked job data as needed
  ];

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Browse Jobs</h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default Career;
