import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CharacterSearchPage from './Pages/CharacterSearchPage';
import CreateCharacterPage from './Pages/CreateCharacterPage';
import ErrorPage from './Pages/ErrorPage';
import NavigationBar from './Pages/NavigationBar';
import ScrollBoxPage from './Pages/ScrollBoxPage';
import StartYourQuest from './Pages/StartYourQuest';

export function RouterApp() {
  return (
    <BrowserRouter
      future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
    >
      <NavigationBar />
      <Routes>
        <Route path="/" element={<StartYourQuest />} />
        <Route path="/create-character" element={<CreateCharacterPage />} />
        <Route path="/search-character" element={<CharacterSearchPage />} />
        <Route path="/error" element={<ErrorPage />} />
        <Route path="/handbook" element={<ScrollBoxPage />} />
      </Routes>
    </BrowserRouter>
  );
}
