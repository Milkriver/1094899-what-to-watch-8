import { connect, ConnectedProps } from 'react-redux';
import { Link } from 'react-router-dom';
import { IState } from '../../types/state';

const mapStateToProps = ({ authorizationStatus }: IState) => ({
  authorizationStatus,
});
const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
function Header(props: PropsFromRedux): JSX.Element {
  const { authorizationStatus } = props;
  // eslint-disable-next-line no-console
  console.log(authorizationStatus);
  return (
    <header className="page-header film-card__head">
      <div className="logo">
        <Link to={'/'} className="logo__link">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </Link>
      </div>
      {
        (authorizationStatus === 'AUTH') ?

          < ul className="user-block">
            <li className="user-block__item">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>
            </li>
            <li className="user-block__item">
              <div>Mail</div>
              <a href="/#" className="user-block__link">Sign out</a>
            </li>
          </ul>
          :
          <div className="user-block">
            <a href="sign-in.html" className="user-block__link">Sign in</a>
          </div>
      }
    </header >
  );
}

export { Header };
export default connector(Header);
