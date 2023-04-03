import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Profile from './pages/profile';
import Layout from './components/layout';
import NotFound from './pages/not-found';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Layout /> }>
        <Route index element={ <Home /> } />
        <Route path="/profile/:username" element={ <Profile /> } />
      </Route>
      <Route path="*" element={ <NotFound /> } />
    </Routes>
  );
}

export default App;
