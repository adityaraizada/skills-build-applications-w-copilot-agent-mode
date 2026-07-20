import { Routes, Route, Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container py-5">
      <div className="p-5 mb-4 bg-light rounded-3">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold">OctoFit Tracker</h1>
          <p className="col-md-8 fs-4">
            A modern multi-tier fitness tracking experience for teams and individuals.
          </p>
          <Link className="btn btn-primary btn-lg" to="/about">
            Learn more
          </Link>
        </div>
      </div>
    </div>
  );
}

function About() {
  return (
    <div className="container py-5">
      <h2>About OctoFit</h2>
      <p>Track workouts, manage teams, and celebrate progress.</p>
      <Link className="btn btn-outline-secondary" to="/">
        Back home
      </Link>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}
