import { Link } from 'react-router-dom';

export function Error404(): JSX.Element {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', height: '100vh', alignItems: 'center' }} className="error404">
      <div style={{ marginRight: '10px' }}>404 Not Found </div>
      <Link to={'/'} className="main">Вернуться на главную страницу</Link>
    </div>
  );
}
