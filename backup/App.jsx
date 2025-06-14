// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Dashboard from './pages/Dashboard';
// import Profile from './pages/Profile';
// import Compose from './pages/Compose';
// import Transfer from './pages/Transfer';
// import Settings from './pages/Settings';

// function App() {
//   return (
//     <Router>
//       <div className="relative min-h-screen">
//         <Routes>
//           <Route path="/home" element={<Dashboard />} />
//           <Route path="/profile" element={<Profile />} />
//           <Route path="/compose" element={<Compose />} />
//           <Route path="/transfer" element={<Transfer />} />
//           <Route path="/settings" element={<Settings />} />
//         </Routes>
//         <Navbar />
//       </div>
//     </Router>
//   );
// }

// export default App;

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Compose from './pages/Compose.jsx';
import Transfer from './pages/Transfer.jsx';
import Profile from './pages/Profile.jsx';
import Settings from './pages/Settings.jsx';
import UserDetail from './components/UserDetails.jsx'; // Impor UserDetail

function App() {
  
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 flex flex-col">
        <div className="flex-grow">
          <Routes>
            <Route path="/home" element={<Dashboard />} />
            {/* <Route path="/" element={<Dashboard />} /> */}
            <Route path="/compose" element={<Compose />} />
            <Route path="/transfer" element={<Transfer />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/profile/userdetail" element={<UserDetail />} /> {/* Tambah rute untuk UserDetail */}
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
        <Navbar />
      </div>
    </Router>
  );
}

export default App;