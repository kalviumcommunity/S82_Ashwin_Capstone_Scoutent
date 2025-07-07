import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 px-6 py-12 md:px-20">
      <div className="max-w-5xl mx-auto space-y-10">
        <h1 className="text-4xl font-bold text-green-700">About FootballScout</h1>

        <p className="text-lg leading-relaxed">
          FootballScout is a web platform designed to connect aspiring football and cricket players with scouts, coaches, and professional clubs. By enabling athletes to upload their skill or match videos, the platform serves as a discovery hub for talent across regions. With smart recommendations and detailed player profiles, FootballScout simplifies how top talent is identified and recruited.
        </p>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-green-600">Core Features</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li><strong>Player Profiles:</strong> Users can create detailed profiles showcasing stats, achievements, and background information.</li>
            <li><strong>Video Uploads:</strong> Athletes can upload and categorize videos by skill type or playing position.</li>
            <li><strong>Scouting Dashboard:</strong> Scouts can browse and filter players based on region, role, and skill level.</li>
            <li><strong>AI Recommendations:</strong> The system highlights standout players based on video engagement and scout preferences.</li>
            <li><strong>Role-Based Access:</strong> Different user types — players, scouts, and admins — have tailored access and functionality.</li>
          </ul>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-green-600">Development Timeline</h2>
          <p>
            The project follows a four-week development cycle with structured day-by-day goals, including setup, backend, frontend, and AI system integration.
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            <li>Week 1: Planning, architecture, authentication, and initial UI setup.</li>
            <li>Week 2: Backend development with MongoDB, APIs, and video storage.</li>
            <li>Week 3: Frontend dashboards for players and scouts, video interaction.</li>
            <li>Week 4: AI recommendations, performance analytics, testing, and deployment.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-green-600">Technology Stack</h2>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            <li><strong>Frontend:</strong> React.js with Tailwind CSS</li>
            <li><strong>Backend:</strong> Node.js, Express.js</li>
            <li><strong>Database:</strong> MongoDB</li>
            <li><strong>Video Storage:</strong> Cloudinary or AWS S3</li>
            <li><strong>Authentication:</strong> JWT-based user login</li>
            <li><strong>Hosting:</strong> Vercel (Frontend), Render (Backend)</li>
          </ul>
        </section>

        <p className="text-md text-gray-600 pt-4">
          FootballScout is built to empower emerging athletes and simplify talent discovery for sports organizations. By combining intuitive design, intelligent recommendations, and real-time scouting capabilities, it redefines how talent meets opportunity.
        </p>
      </div>
    </div>
  );
};

export default About;
