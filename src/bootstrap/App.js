import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import ReduxThunk from 'redux-thunk'
import { apiMiddleware } from 'redux-api-middleware'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from 'react-router-dom';
import { IntlProvider, addLocaleData, FormattedMessage } from 'react-intl';
import {
  HomePage,
  SearchPage,
  CocktailPage,
} from '../Pages';
import reducer from '../data'
import en from '../locale/en'
import it from '../locale/it'
import style from './App.module.scss'
import itIntl from 'react-intl/locale-data/it'
import enIntl from 'react-intl/locale-data/en'

addLocaleData([...enIntl, ...itIntl ])

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
      <IntlProvider
        locale="it"
        messages={it}
      >
        <Router>
          <div className={style.wrapper}>
            <nav className={style.menu}>
              <ul className={style.menulist}>
                <li className={style.menuitem}>
                  <NavLink exact className={style.link} activeClassName={style.linkActive} to="/">
                    <FormattedMessage id="home" />
                  </NavLink>
                </li>
                <li className={style.menuitem}>
                  <NavLink className={style.link} activeClassName={style.linkActive} to="/search">
                    <FormattedMessage id="search" />
                  </NavLink>
                </li>
              </ul>
            </nav>
            <Switch>
              <Route path="/" exact component={HomePage} />
              <Route path="/search" exact component={SearchPage} />
              <Route path="/cocktails/:id" exact component={CocktailPage} />
            </Switch>
          </div>
        </Router>
      </IntlProvider>
    </Provider>
  );
}

export default App;
