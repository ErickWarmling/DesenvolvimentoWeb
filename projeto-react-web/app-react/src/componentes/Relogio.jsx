import { Component } from "react";

export default class Relogio extends Component {
    constructor(props) {
        super(props);
        this.state = {hora: new Date()};
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
            hora: new Date()
        });
    }

    render() {
        return (
            <div>
                <h2>Horário: {this.state.hora.toLocaleTimeString()}</h2>
            </div>
        )
    }
}