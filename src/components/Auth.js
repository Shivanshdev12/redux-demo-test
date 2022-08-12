import classes from './Auth.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { authActions } from "../store/index";

const Auth = () => {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth.isAuthenticated);
  const loginHandler = (e) => {
    e.preventDefault();
    dispatch(authActions.login());
  }
  // const logoutHandler = (e) => {
  //   e.preventDefault();
  //   dispatch(authActions.logout());
  // }
  return (
    <main className={classes.auth}>
      <section>
        <form>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' />
          </div>
          {auth === false && <button onClick={loginHandler}>Login</button>}
        </form>
      </section>
    </main>
  );
};

export default Auth;
