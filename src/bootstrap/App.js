import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import {
  HomePage,
  SearchPage,
} from '../Pages';
import style from './App.module.scss'

function App() {
  return (
    <Router>
      <div className={style.wrapper}>
        <nav className={style.menu}>
          <ul className={style.menulist}>
            <li className={style.menuitem}>
              <NavLink exact className={style.link} activeClassName={style.linkActive} to="/">Home</NavLink>
            </li>
            <li className={style.menuitem}>
              <NavLink className={style.link} activeClassName={style.linkActive} to="/search">Search</NavLink>
            </li>
          </ul>
        </nav>
        <Route path="/" exact component={HomePage} />
        <Route path="/search" exact component={SearchPage} />
      </div>
    </Router>
  );
}

export default App;
