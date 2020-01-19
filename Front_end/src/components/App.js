import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import NewBadge from '../pages/NewBadge.js';
import Badges from '../pages/Badges.js';
import Layout from './Layout'
import NotFound from '../pages/NotFound'

function App() {
    return (
        <BrowserRouter> 
            <Layout>
                <Switch>
                    <Route exact path="/badges" component={Badges} />             
                    <Route exact path="/badges/new" component={NewBadge} /> 
                    <Route component={NotFound} />
                </Switch>   
            </Layout>
            
            
        </BrowserRouter>
    )
};

export default App