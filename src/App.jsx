import React, { Component } from 'react';

import './App.css'

class App extends Component {
    render() {
        return (
            <div className='App'>
                <div className='App-title'>Countdown to December 25, 2018 </div>
                <div>
                    <div className='Clock-days'> 14 Days(s)</div>
                    <div className='Clock-hours'> 30 hour(s)</div>
                    <div className='Clock-minutes'> 15 minutes(s)</div>
                    <div className='Clock-seconds'> 20 seconds(s)</div>
                </div>
                <div>
                <input placeholder='new date'/>
                <button> submit </button>
                </div>
            </div>
        );
    }
}

export default App;