import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

// MF's
const HomePage = React.lazy(() => import('HomeApp/HomePage'))
const ContactsPage = React.lazy(() => import('ContactsApp/ContactsPage'))

import './App.scss'

const App: React.VFC = () => (
    <Router>
        <div className="app">

            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/contacts">Contacts</Link>
                </li>
            </ul>

            <Switch>
                <Route exact path="/">
                    <Suspense fallback={<div>Loading...</div>}>
                        <HomePage />
                    </Suspense>
                </Route>
                <Route exact path="/contacts">
                    <Suspense fallback={<div>Loading...</div>}>
                        <ContactsPage />
                    </Suspense>
                </Route>
            </Switch>
        </div>
    </Router>
)

export default App