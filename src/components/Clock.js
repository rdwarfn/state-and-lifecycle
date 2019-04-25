import React, { Component } from 'react';

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        };
    }
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


// When you call setState(), React merges the object you provide into the current state.
// For example, your state may contain several independent variables:
//   constructor(props) {
//     super(props);
//     this.state = {
//       posts: [],
//       comments: []
//     };
//   }

// Then you can update them independently with separate setState() calls:
//   componentDidMount() {
//     fetchPosts().then(response => {
//       this.setState({
//         posts: response.posts
//       });
//     });

//     fetchComments().then(response => {
//       this.setState({
//         comments: response.comments
//       });
//     });
//   }