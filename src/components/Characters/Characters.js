import { Card, Container } from '@material-ui/core'
import React, { Component } from 'react'

export default class Characters extends Component {

    componentDidMount() {
        const { getAllCharacters } = this.props
        console.log(getAllCharacters);
        const data = getAllCharacters;
    }

    render() {
        return (
            <Container>
                <h1>Rick and Morty Characters</h1>
            </Container>
        ) 
    }
}