import React, {Component} from 'react';

export default class CountDown extends Component{

    constructor(props){
        super(props);
        this.state = {timeLeft : 0}
        console.log('props', this.props)
    }

    componentWillReceiveProps(nextProps){
        this.setState({timeLeft: this.props.timeLeft});
    }

    componentWillMount(){
        this.setState({timeLeft: this.props.timeLeft});
    }

    componentDidMount(){
        setInterval(() => this.setState({timeLeft : this.state.timeLeft -1}),  1000);
    }

    render(){
        return(
            <div>
                Time Left : {this.state.timeLeft} (seconds)
            </div>
        )
    }
}