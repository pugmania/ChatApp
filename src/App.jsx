import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Amplify } from 'aws-amplify';
import amplifyconfig from './amplifyconfiguration.json';
import './App.css'

Amplify.configure(amplifyconfig);
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Chat App</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test my bussy
        </p>
      </div>
      <p className="read-the-docs">
        Click on the deez nuts to read the docs
      </p>
    </>
  )
}

export default App
