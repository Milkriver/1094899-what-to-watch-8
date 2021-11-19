
import { HeaderLogo } from '../header-logo/header-logo';
import HeaderUserBlock from '../header-user-block/header-user-block';

export function Header(): JSX.Element {
  return (
    <header className="page-header film-card__head">
      <HeaderLogo />
      <HeaderUserBlock />
    </header >
  );
}

