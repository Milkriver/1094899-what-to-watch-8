import { MainPage } from '../main-page/main-page';
import { BrowserRouter } from 'react-router-dom';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <MainPage />
      </div>
    </BrowserRouter>
  );
}

export default App;
