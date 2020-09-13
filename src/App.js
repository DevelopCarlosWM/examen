import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom'
import { Provider } from 'react-redux'
import ProductList from './src/screens/productsList'
import Order from './src/screens/order'
import store from './redux/store'
function App() {
  return (
    <Provider store={ store }>
      <BrowserRouter>
        <Switch>
          <Route path='/order' component={Order}/>
          <Route path='/' component={ProductList} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
