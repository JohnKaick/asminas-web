import React, { Component } from 'react';
import { Switch, Redirect } from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react'

import Menu from '../component/menu'
import jogoView from '../jogo/container'


export default class extends Component {
    render() {
        return (
            <Container>
                <Menu />
                <Router>
                    <Switch>
                        <Route path="/" render={() => (
                            <Route exact path="/" component={jogoView} />
                        )} />

                        <Redirect path="/" />
                    </Switch>
                </Router>
            </Container>
        )
    }
}