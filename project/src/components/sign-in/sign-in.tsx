import { FormEvent, useRef } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { useHistory } from 'react-router';
import { AppRoute } from '../../const';
import { loginAction } from '../../store/api-actions';
import { ThunkAppDispatch } from '../../types/actions';
import { AuthData } from '../../types/auth-data';
import { Footer } from '../footer/footer';
import { HeaderLogo } from '../header-logo/header-logo';

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  onSubmit(authData: AuthData) {
    return dispatch(loginAction(authData));
  },
});

const connector = connect(null, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function SignIn(props: PropsFromRedux): JSX.Element {
  const { onSubmit } = props;

  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const history = useHistory();

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (loginRef.current !== null && passwordRef.current !== null) {
      onSubmit({
        login: loginRef.current.value,
        password: passwordRef.current.value,
      })
        .then(() => history.push(AppRoute.Main));
    }
  };
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <HeaderLogo />

        <h1 className="page-title user-page__title">Sign in</h1>
      </header>
      <div className="sign-in user-page__content">
        <form action="#" className="sign-in__form" onSubmit={handleSubmit}>
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input ref={loginRef} className="sign-in__input" type="email" placeholder="Email address" name="user-email" id="user-email" />
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className="sign-in__field">
              <input ref={passwordRef} className="sign-in__input" type="password" placeholder="Password" name="user-password" id="user-password" />
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit">Sign in</button>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
}


export { SignIn };
export default connector(SignIn);
