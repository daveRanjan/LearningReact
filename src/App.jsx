import React, { Component } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';

import Countdown from './CountDown';

import './App.css'

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            countDown: 60,
            newCountDown: 0
        }
    }

    changeTimeRange() {
        console.log('state', this.state);
        this.setState({ countDown: this.state.newCountDown });
    }

    render() {
        return (
            <div className='App'>
                <div className='App-title'>Countdown to {this.state.countDown} </div>
                <Countdown timeLeft={this.state.countDown} />
                <Form inline>
                    <FormControl className='Deadline-input' placeholder='Countdown in seconds' onChange={(event) => this.setState({ newCountDown: event.target.value })} />
                    <Button onClick={() => this.changeTimeRange()}> submit </Button>
                </Form>
            </div>
        );
    }
}

export default App;