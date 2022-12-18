
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SharePage from './Components/Pages/SharePage';
import InvitePage from './Components/Pages/InvitePage';
import SearchPage from './Components/Pages/SearchPage';
import NoPage from './Components/Pages/NoPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharePage/>} />
        <Route path="/invite" element={<InvitePage/>} />
        <Route path="/search" element={<SearchPage/>} />       
        <Route path="*" element={<NoPage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
