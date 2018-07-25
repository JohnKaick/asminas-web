import React, { Component } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom'

import Menu from '../component/menu'
import jogoView from '../jogo'


export default class extends Component {
    render() {
        return (
            <div>
                <Menu />
                <Router>
                    <Switch>
                        <Route path="/jogo" render={() => (
                            <div>
                                <Route path="/jogo" component={jogoView} />
                            </div>
                        )} />

                        <Redirect path="jogo" />
                    </Switch>
                </Router>
            </div>
        )
    }
}