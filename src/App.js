import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Layout from './components/layout/Layout';
import Page from './pages/page'; // Make sure the file name matches
import About from './pages/About';
import Team from './pages/Team';
import Partner from './pages/Partner';
import Contact from './pages/Contact';
import Project from './pages/Project';
import Service from './pages/Service';
import Trainings from './pages/Trainings'; // Make sure the file name matches
import Events from './components/event/Events';
import News from './pages/News';
import NewsPost from './components/news/NewsPost';
import Career from './components/career/Career';

// import EventForm from './components/event/EventForm';
// import TrainingForm from './components/training/TrainingForm'; // Fix typo here

function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Public routes */}
          <Route path="/" element={<Page />}>
            <Route index element={<Home />} />
            <Route path="aboutUs" element={<About />} />
            <Route path="team" element={<Team />} />
            <Route path="partner" element={<Partner />} />
            <Route path="contact" element={<Contact />} />
            <Route path="projects" element={<Project />} />
            <Route path="services" element={<Service />} />
            <Route path="event" element={<Events />} />
            <Route path="trainings" element={<Trainings />} />
            <Route path="news" element={<News />} />
            <Route path="newspost/:slug" element={<NewsPost />} />
            <Route path="career" element={<Career />} />
            {/* <Route path="attendEvent/:id" element={<EventForm />} />
            <Route path="enroll/:id" element={<TrainingForm />} /> */}
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
