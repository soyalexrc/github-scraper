import React, { Suspense, lazy } from 'react'
import Loader from './components/Loader'

import { Router } from '@reach/router'

const UserResume = lazy(() => import('./pages/UserResume'))
const RepoDetail = lazy(() => import('./pages/RepoDetail'))
const NotFound = lazy(() => import('./pages/NotFound'))
const EntryPoint = lazy(() => import('./pages/EntryPoint'))


const App = () => {
  return (
    <Suspense fallback={<Loader/>}>
      <Router>
        <NotFound default />
        <EntryPoint path='/' />
        <UserResume path='/user/:id' />
        <RepoDetail path='/repo/:id' />
      </Router>
    </Suspense>
  );
}


export default App


