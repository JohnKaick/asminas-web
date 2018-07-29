import React, { Component } from 'react';

import { Button, Card, Image } from 'semantic-ui-react'

export default class extends Component {

    constructor(props){
        super(props)
    }

    render() {

        const { jogo } = this.props

        return (
            <div>
                <br />
                {jogo.map((m) => (
                    <Card>
                        <Card.Content>
                            <Image floated='right' size='mini' src='/images/avatar/large/steve.jpg' />
                            <Card.Header>Steve Sanders</Card.Header>
                            <Card.Meta>Friends of Elliot</Card.Meta>
                            <Card.Description>
                            Steve wants to add you to the group <strong>best friends</strong>
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <div className='ui two buttons'>
                            <Button basic color='green'>
                                Approve
                            </Button>
                            <Button basic color='red'>
                                Decline
                            </Button>
                            </div>
                        </Card.Content>
                    </Card>
                    
                ))}
                <Card>
                    <Card.Content>
                        <Image floated='right' size='mini' src='/images/avatar/large/steve.jpg' />
                        <Card.Header>Steve Sanders</Card.Header>
                        <Card.Meta>Friends of Elliot</Card.Meta>
                        <Card.Description>
                        Steve wants to add you to the group <strong>best friends</strong>
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <div className='ui two buttons'>
                        <Button basic color='green'>
                            Approve
                        </Button>
                        <Button basic color='red'>
                            Decline
                        </Button>
                        </div>
                    </Card.Content>
                </Card>
            </div>
        )
    }

}