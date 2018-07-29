import React, { Component } from 'react';

import { Button, Card, Item, Grid, Feed } from 'semantic-ui-react'

export default class extends Component {

    constructor(props){
        super(props)
    }

    render() {

        const { jogos } = this.props

        return (
            <div>
                <br />
                <Grid divided='vertically'>
                    <Grid.Row>
                        <Grid.Column width={8}>
                            <Item.Group>
                                <Item>                 
                                    <Item.Content>
                                    <Item.Header as='a'>Local: Osasco</Item.Header>
                                    <Item.Meta>Society</Item.Meta>
                                    <Item.Description>
                                        <p>Endereço: Av. Pref. Hirant Sanazar, 631 - Umuarama</p>                                    
                                        <p>Dia: Toda Segunda</p>
                                        <p>Horário: 20:00 - 21:30</p>
                                        <p>Preço: 20 (avulso), 50 (mensal)</p>
                                    </Item.Description>
                                    </Item.Content>
                                </Item>
                            </Item.Group>
                        </Grid.Column>     
                        <Grid.Column width={5}>
                            <Card>
                                <Card.Content>
                                    <Card.Header>Vai jogar?</Card.Header>
                                    <Card.Description>
                                        <p>Dia: Segunda</p>
                                        <p>Horário: 20:00 - 21:30</p>
                                    </Card.Description>
                                </Card.Content>
                                <Card.Content extra>
                                    <div className='ui two buttons'>
                                    <Button basic color='green'>
                                        Vou Jogar
                                    </Button>
                                    <Button basic color='red'>
                                        Não vou
                                    </Button>
                                    </div>
                                </Card.Content>
                            </Card>
                        </Grid.Column>               
                        <Grid.Column width={3}>
                            <Feed>
                                <Feed.Event>
                                    <Feed.Label icon='check' />
                                    <Feed.Content date='Goleiro' summary="Maria" />
                                </Feed.Event>
                                <Feed.Event>
                                    <Feed.Label icon='check' />
                                    <Feed.Content date='Zagueiro' summary="Maria" />
                                </Feed.Event>
                                <Feed.Event>
                                    <Feed.Label icon='check' />
                                    <Feed.Content date='Ala' summary="Maria" />
                                </Feed.Event>
                                <Feed.Event>
                                    <Feed.Label icon='check' />
                                    <Feed.Content date='Ala' summary="Maria" />
                                </Feed.Event>
                                <Feed.Event>
                                    <Feed.Label icon='check' />
                                    <Feed.Content date='Pivo' summary="Maria" />
                                </Feed.Event>
                            </Feed>
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row>
                        <Grid.Column width={8}>
                            <Item.Group>
                                <Item>                 
                                    <Item.Content>
                                    <Item.Header as='a'>Local: Osasco</Item.Header>
                                    <Item.Meta>Society</Item.Meta>
                                    <Item.Description>
                                        <p>Endereço: Av. Pref. Hirant Sanazar, 631 - Umuarama</p>                                    
                                        <p>Dia: Toda Segunda</p>
                                        <p>Horário: 20:00 - 21:30</p>
                                        <p>Preço: 20 (avulso), 50 (mensal)</p>
                                    </Item.Description>
                                    </Item.Content>
                                </Item>
                            </Item.Group>
                        </Grid.Column>     
                        <Grid.Column width={5}>
                            <Card>
                                <Card.Content>
                                    <Card.Header>Vai jogar?</Card.Header>
                                    <Card.Description>
                                        <p>Dia: Segunda</p>
                                        <p>Horário: 20:00 - 21:30</p>
                                    </Card.Description>
                                </Card.Content>
                                <Card.Content extra>
                                    <div className='ui two buttons'>
                                    <Button basic color='green'>
                                        Vou Jogar
                                    </Button>
                                    <Button basic color='red'>
                                        Não vou
                                    </Button>
                                    </div>
                                </Card.Content>
                            </Card>
                        </Grid.Column>               
                        <Grid.Column width={3}>
                            <Feed>
                                <Feed.Event>
                                    <Feed.Label icon='check' />
                                    <Feed.Content date='Goleiro' summary="Maria" />
                                </Feed.Event>
                                <Feed.Event>
                                    <Feed.Label icon='check' />
                                    <Feed.Content date='Zagueiro' summary="Maria" />
                                </Feed.Event>
                                <Feed.Event>
                                    <Feed.Label icon='check' />
                                    <Feed.Content date='Ala' summary="Maria" />
                                </Feed.Event>
                                <Feed.Event>
                                    <Feed.Label icon='check' />
                                    <Feed.Content date='Ala' summary="Maria" />
                                </Feed.Event>
                                <Feed.Event>
                                    <Feed.Label icon='check' />
                                    <Feed.Content date='Pivo' summary="Maria" />
                                </Feed.Event>
                            </Feed>
                        </Grid.Column>
                    </Grid.Row>                
                </Grid>
            </div>
        )
    }

}