import * as React from 'react';
import { Route, Switch, withRouter} from "react-router";
import Home from "@/pages/Home";
import Test from "@/pages/Test";

const App = () => {
  return (
    <>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/test" component={Test}/>
      </Switch>
      </>
  )
};

export default withRouter(App);