import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import RouterView from './router/routerView'
import routes from './router/router.config'
import './index.css'
import {Provider} from 'react-redux'
import store from './store/store'
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <RouterView routes={routes.routes}></RouterView>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
