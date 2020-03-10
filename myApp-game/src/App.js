import React from "react";
import { HashRouter as Router, Route,Switch } from "react-router-dom";
import Routes from './routes';

class App extends React.Component {
 
  render() { 
  let  html= null;
    html =  Routes.map((route,index) => {
      return(
        <Route key={index} path={route.path} exact={route.exact} component={route.component} />
      )
    })
    return ( 
      <Router>
     <Switch>
     {html}
     </Switch>
    </Router>
     );
  }
}
 
export default App;
