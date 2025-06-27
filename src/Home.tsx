import React from 'react';
import './Home.css';

export default function Home() {
  return (
    <div className="container">
      <h1 className="title">Will McCrite</h1>
      <p className="tagline">Software Engineer | Freelance Developer | Problem Solver</p>
      <button
        className="cta-button"
        onClick={() => {
          // Example: scroll to Projects section or navigate to /projects
          alert('Let’s build something great!');
        }}
      >
        View My Work
      </button>
    </div>
  );
}
