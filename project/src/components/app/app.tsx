import { MainPage } from '../main-page/main-page';
import { BrowserRouter } from 'react-router-dom';

type AppCardProps = {
  filmName: string,
  genre: string,
  released: number,
}

function App({filmName, genre, released}: AppCardProps): JSX.Element {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <MainPage filmName={filmName} genre={genre} released={released}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
