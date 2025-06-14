import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import HomePageNote from './Pages/HomePageNote';
import ArchiveNote from './Pages/ArchiveNote';
import AddNote from './Pages/AddNote';
import ShowDetailNote from './Pages/ShowDetailNote';

function App() {
  return (
    <>
    <div className="app-container">
      <header>
        <h1>
          <Link to="/">Aplikasi Catatan</Link>
        </h1>
        <nav className='navigation'>
          <ul>
            <li>
              <Link to="/archives">Arsip</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePageNote />} />
          <Route path="/archives" element={<ArchiveNote />} />
          <Route path="/addNote" element={<AddNote />} />
          <Route path="/notes/:id" element={<ShowDetailNote />} />
        </Routes>
      </main>
    </div>
    </>
  );
}

export default App;
