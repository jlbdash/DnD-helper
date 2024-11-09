import { BrowserRouter } from 'react-router-dom';
import CharacterSearchPage from './Pages/CharacterSearchPage.js';
import CreateCharacterPage from './Pages/CreateCharacterPage.js';
import ErrorPage from './Pages/ErrorPage.js';
import ScrollBoxPage from './Pages/ScrollBoxPage.js';

export function RouterApp() {
  return (
    <BrowserRouter>
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
