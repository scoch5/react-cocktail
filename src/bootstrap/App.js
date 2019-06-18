import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import ReduxThunk from 'redux-thunk'
import { apiMiddleware } from 'redux-api-middleware'
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom';
import {
  HomePage,
  SearchPage,
} from '../Pages';
import reducer from '../data'
import style from './App.module.scss'

const composeEnhancers = typeof window === 'object'
  && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose

const enhancer = composeEnhancers(
  applyMiddleware(ReduxThunk, apiMiddleware),
)

const store = createStore(reducer, enhancer)
  
function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
