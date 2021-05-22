import React from 'react'
import {Switch, useLocation, Route } from 'react-router-dom'
import { TransitionGroup, CSSTransition} from 'react-transition-group'

import "../src/styles/animation.css"

import Home from '../src/components/pages/Home'

export default function Routes() {
    const location = useLocation();
    return ( 
    <TransitionGroup>
        <CSSTransition key={location.key} classNames="fade" timeout={500}>
            <Switch location={location}>
                <Route path="/" exact component={Home} />
                
             </Switch>
        </CSSTransition>
    </TransitionGroup>
    )
}