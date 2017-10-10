import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store/store'

import AppRouter from './router/appRouter'


import './static/css/common.less'
import './static/css/font.css'

const store = configureStore()

render(
  <Provider store={store}>
    <AppRouter></AppRouter>
  </Provider>
  ,
  document.getElementById("root")
)