import React, {lazy, Suspense} from 'react'
import LoaderScreen from './components/Loader'

import {Router} from '@reach/router'

const UserResume = lazy(() => import('./pages/UserResume'))
const RepoDetail = lazy(() => import('./pages/RepoDetail'))
const NotFound = lazy(() => import('./pages/NotFound'))
const EntryPoint = lazy(() => import('./pages/EntryPoint'))


const App = () => {
  return (
    <Suspense fallback={<LoaderScreen/>}>
      <Router>
        <NotFound default/>
        <EntryPoint path='/'/>
        <UserResume path='/user/:username'/>
        <RepoDetail path='repo/:repo'/>
      </Router>
    </Suspense>
  );
}


export default App


