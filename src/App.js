import logo from './logo.svg';
import react,{Component} from 'react';
import './App.css';
import {Header} from './components/header/Header';
import {Banner} from './components/page/banner/Banner'
import { Product } from './components/page/product/Product';
import {News} from './components/page/news/News';
import { Contact } from './components/contact/Contact';
import {Video} from './components/page/video/Video';
import {Msg} from './components/page/message/Msg';
import {Post} from './components/page/news/Post';
import {Blog} from './components/page/news/Blog';
import {AppContainer} from './containers/Container';
import {Liquid} from './components/page/product/Liquid';
import {House} from './components/page/product/House';
import {Female} from './components/page/product/Female';
import {dry} from './components/page/product/Dry';
import {environment} from './components/page/product/Environment';
import {Group} from './components/page/video/Group';
import {Nutrix} from './components/page/video/Nutrix';
import {Vwind} from './components/page/video/Vwind';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <main>
          <Switch>
            <Route path="/" exact component={AppContainer}/>
            <Route path="/liquid" component={Liquid}/>
            <Route path="/house" component={House}/>
            <Route path="/female" component={Female}/>
            <Route path="/dry" component={dry}/>
            <Route path="/environment" component={environment}/>
            <Route path="/group" component={Group}/>
            <Route path="/nutrix" component={Nutrix}/>
            <Route path="/wind" component={Vwind}/>
            <Route path="/:slug" render={Post}/>
            {/*<Route path="/" exact component={AppContainer}/>*/}
          </Switch>
        </main>
        <Contact/>
      </Router>
     </div>
  );
  }

export default App
