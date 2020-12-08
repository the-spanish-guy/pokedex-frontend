import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './pages/Home'
import Pokemon from './pages/Pokemon'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/pokemon" component={Pokemon}/>
      </Switch>
    </BrowserRouter>
  )
}