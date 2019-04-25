import React, { Component } from 'react';

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        };
    }
    // Wrong
    // this.state.comment = 'Hello';

    // Correct
    // this.setState({comment: 'Hello'});

    // For example, this code may fail to update the counter:
    // Wrong
    // this.setState({
    // counter: this.state.counter + this.props.increment,
    // });

    // Correct
    // this.setState((state, props) => ({
    // counter: state.counter + props.increment
    // }));
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <h1>Hello World</h1>
                <h2>this lifecycle clock {this.state.date.toLocaleTimeString()}</h2>
            </div>
        );
    }

}

export default Clock;