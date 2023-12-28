import { useState } from 'react'
import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import amplifyconfig from './amplifyconfiguration.json';
import '@aws-amplify/ui-react/styles.css';
import './App.css'

Amplify.configure(amplifyconfig);
function App() {
  return <Authenticator>
          {({ signOut, user }) => (
            <main>
              <h1>Hello {user.username}</h1>
              <h1>Hello {user.userId}</h1>
              {console.log(user)}
              <button onClick={signOut}>Sign out</button>
            </main>
          )}
        </Authenticator>
}

export default App
