import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './assets/styles.css'
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter } from 'react-router-dom';
import ApiContext from './context/api.js';
import api from './api/index.js';
import createRootStore from './store/index.js';
import StoreContext from './context/store.js';

const store = createRootStore(api, localStorage)

let root = ReactDOM.createRoot(document.getElementById('root'))

let rootEl = <ApiContext.Provider value={api} >
  <StoreContext.Provider value={store}>
    <BrowserRouter><App />
    </BrowserRouter>
  </StoreContext.Provider>
</ApiContext.Provider>

store.cart.load()

store.products.load().then(
  () => { root.render(rootEl) }
)



