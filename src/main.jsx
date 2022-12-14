import React from 'react'
import ReactDOM from 'react-dom/client'

// import HooksApp from './HooksApp'
// import CounterWithCustomHook from './components/useState/CounterWithCustomHook'
// import SimpleForm from './components/useEffect/SimpleForm'
// import FormWithCustomHook from './components/useEffect/FormWithCustomHook'
// import { MultipleCustomHooks } from './components/examples/MultipleCustomHooks'
// import { FocusScreen } from './components/useRef/FocusScreen'
// import { Layout } from './components/useLayoutEffect/Layout'
// import { Memorize } from './components/memos/Memorize'
// import { MemoHook } from './components/memos/MemoHook'
// import { CallbackHook } from './components/memos/CallbackHook'
import { Padre } from './components/tarea-memo/Padre'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <CounterWithCustomHook /> */}
    {/* <SimpleForm /> */}
    {/* <FormWithCustomHook /> */}
    {/* <MultipleCustomHooks /> */}
    {/* <FocusScreen /> */}
    {/* <Layout /> */}
    {/* <Memorize /> */}
    {/* <MemoHook /> */}
    {/* <CallbackHook /> */}
    <Padre />
  </React.StrictMode>
)
