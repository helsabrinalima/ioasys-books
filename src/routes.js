import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { AuthProvider, useAuth } from './contexts/auth';
import { Home } from './Pages/Home';
import { Login } from './Pages/Login';

function PrivateRoute({ component: Component, ...rest }) {

  const { loggedIn } = useAuth()

  return(
    <Route {...rest} render={props => (
      !!loggedIn ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: '/login',  state: { from: props.location }}} />
      )
    )} />
  )
}

export function RoutesMain() {
  return(
    <BrowserRouter>
      <AuthProvider>
        <Switch>
          <Route path="/" exact render={() => (<Redirect to="/login" />)}/>
          <Route path="/login" component={Login}/>
          <PrivateRoute path="/home" component={Home} />
        </Switch>
      </AuthProvider>
    </BrowserRouter>
  )
}