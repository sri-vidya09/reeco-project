import React from 'react'
import {Provider} from'react-redux'
import store from './Store/store'
import NavBar from './component/NavBar'
import OrderTableBody from './component/OrderTableBody'



function App() {
  return (
    <Provider store={store}>
      <div className='app-container'>
      <NavBar/>
      <OrderTableBody/>
    </div>
    </Provider>
  )
}

export default App