import React, { useContext, Suspense, lazy } from 'react'
import Header from './containers/Header'
import Loader from './components/Loader'

import { Router, Redirect } from '@reach/router'
import { Context } from './Context'

const UserResume = lazy(() => import('./pages/UserResume'))
const RepoDetail = lazy(() => import('./pages/RepoDetail'))
const NotFound = lazy(() => import('./pages/NotFound'))
const EntryPoint = lazy(() => import('./pages/EntryPoint'))


const App = () => {



  return (
    <Suspense fallback={<Loader/>}>
      <Header/>
      <Router>
        <NotFound default />
        <EntryPoint path='/' />
        <UserResume path='/home' />
        <RepoDetail path='/repo/:id' />
      </Router>
    </Suspense>
  );
}


export default App


