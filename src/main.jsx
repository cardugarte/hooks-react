import React from 'react'
import ReactDOM from 'react-dom/client'

// import HooksApp from './HooksApp'
// import CounterWithCustomHook from './components/useState/CounterWithCustomHook'
import SimpleForm from './components/useEffect/SimpleForm'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <CounterWithCustomHook /> */}
    <SimpleForm />
  </React.StrictMode>
)
