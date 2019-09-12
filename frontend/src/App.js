import React from 'react';
import Home from './containers/Home/Home';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Error404 from './components/Error404/Error404';
import Registro from './components/User/Registro/Registro';
import Login from './components/User/Login/Login';
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/registro" component={Registro} exact/>
        <Route path="/login" component={Login} exact/>
        <Route path="*" component={Error404} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;