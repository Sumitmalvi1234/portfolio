// src/router.tsx

import { createBrowserRouter } from 'react-router';
import App from './App';
import Hero from './components/Hero';
import EngineSkills from './components/EngineSkills';
import ProjectsGrid from './components/ProjectsGrid';
import RuntimeTimeline from './components/RuntimeTimeline';
import ContactArray from './components/ContactArray';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Hero />
      },
      {
        path: 'skills', // ✅ Becomes localhost:5173/skills
        element: <EngineSkills />
      },
      {
        path: 'projects', // ✅ Becomes localhost:5173/projects
        element: <ProjectsGrid />
      },
      {
        path: 'timeline', // ✅ Becomes localhost:5173/timeline
        element: <RuntimeTimeline />
      },
      {
        path: 'contact', // ✅ Becomes localhost:5173/contact
        element: <ContactArray />
      }
    ]
  }
]);
