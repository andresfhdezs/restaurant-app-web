import React from 'react';
import { Routes, Route } from 'react-router';

import firebase, { FirebaseContext } from './firebase'

import Ordenes from './components/paginas/Ordenes';
import Menu from './components/paginas/Menu';
import NuevoPlatillo from './components/paginas/NuevoPlatillo';
import Sidebar from './components/ui/Sidebar';
import Login from './components/auth/Login';
import AuthState from './context/auth/authState'
import Nav from './components/paginas/Nav';

function App() {
  return (
    <FirebaseContext.Provider
      value={{ firebase }}
    >
      <AuthState>
        <div className="md:flex min-h-screen">
          <Sidebar />
          <Nav />

          <div className="md:w-3/5 xl:w-4/5 p-6">
            <Routes>
              <Route path="/" element={<Ordenes />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/nuevo-platillo" element={<NuevoPlatillo />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </div>
        </div>
      </AuthState>
    </FirebaseContext.Provider>
  );
}

export default App;
