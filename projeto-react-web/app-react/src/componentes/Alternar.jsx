import { Component } from "react";

export default class Alternar extends Component {
    constructor(props) {
        super(props);
        this.state = {estaLigado: true};
        this.tratarClique = this.tratarClique.bind(this);
    }

    tratarClique() {
        this.setState(prevState => ({
            estaLigado: !prevState.estaLigado
        }));
    }

    render() {
        return (
            <button onClick={this.tratarClique}>
                {this.state.estaLigado ? 'LIGADO' : 'DESLIGADO'}
            </button>
        );
    }
}