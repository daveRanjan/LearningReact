import React, { Component } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';

import Clock from './Clock';

import './App.css'

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            deadline: 'July 25, 2018',
            newDeadline: ''
        }
    }

    changeDeadline() {
        console.log('state', this.state);
        this.setState({ deadline: this.state.newDeadline });
    }

    render() {
        return (
            <div className='App'>
                <div className='App-title'>Countdown to {this.state.deadline} </div>
                <Clock deadline={this.state.deadline} />
                <Form inline>
                    <FormControl placeholder='new date' onChange={(event) => this.setState({ newDeadline: event.target.value })} />
                    <Button onClick={() => this.changeDeadline()}> submit </Button>
                </Form>
            </div>
        );
    }
}

export default App;