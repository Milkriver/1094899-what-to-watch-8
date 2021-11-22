import { connect, ConnectedProps } from 'react-redux';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { logoutAction } from '../../store/api-actions';
import { ThunkAppDispatch } from '../../types/actions';
import { IState } from '../../types/state';


const mapStateToProps = ({ authorizationStatus }: IState) => ({
  authorizationStatus,
});

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  onSubmit() {
    return dispatch(logoutAction());
  },
});
const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function HeaderUserBlock(props: PropsFromRedux): JSX.Element {
  const { onSubmit } = props;
  const { authorizationStatus } = props;
  return (

    (authorizationStatus === 'AUTH') ?

      < ul className="user-block">
        <li className="user-block__item">
          <div className="user-block__avatar">
            <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
          </div>
        </li>
        <li className="user-block__item">
          <div onClick={onSubmit} className="user-block__link">Sign out</div>
        </li>
      </ul>
      :
      <div className="user-block">
        <Link to={AppRoute.SignIn} className="user-block__link">Sign in</Link>
      </div>


  );
}

export { HeaderUserBlock };
export default connector(HeaderUserBlock);
