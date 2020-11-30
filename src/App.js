import React, { Component } from 'react';
import './App.css';
import Biscoito from './assets/biscoito.png';

class App extends Component{

	constructor(props){
		
		super(props)

		this.state = {
			textoFrase: ""
		}

		this.quebraBiscoito = this.quebraBiscoito.bind(this);

		this.frases = [
		'"Siga os bons e aprenda com eles."', 
		'"O bom-senso vale mais do que muito conhecimento."', 
		'"O riso é a menor distância entre duas pessoas."', 
		'"Deixe de lado as preocupações e seja feliz."',
		'"Realize o óbvio, pense no improvável e conquiste o impossível."',
		'"Acredite em milagres, mas não dependa deles."',
		'"A maior barreira para o sucesso é o medo do fracasso."']
	};

	quebraBiscoito(){

		let state = this.state;
		let numeroAleatorio = Math.floor(Math.random() * this.frases.length);
		state.textoFrase = this.frases[numeroAleatorio];
		this.setState(state);
	};

	render(){
		return(
			<div className="biscoito-corpo">
				<div className="container">
					<div className="row">
						<div className="col-12 col-lg-12" style={{ textAlign: "center" }}>
							<h1>Biscoito da Sorte</h1>
						</div>
					</div>
					<div className="row justify-content-center">
						<div className="col-12 col-lg-4">
							<img className="img-fluid" alt="" src={ Biscoito }></img>
						</div>
					</div>
					<div className="row">
						<div className="col-12 col-lg-12 mt-5" style={{ textAlign: "center" }}>
							<Botao nome="Abrir Biscoito" acaoBtn={this.quebraBiscoito} />
						</div>
					</div>
					<div className="row">
						<div className="col-12 col-lg-12 mt-5" style={{ textAlign: "center" }}>
							<h3>{this.state.textoFrase}</h3>
						</div>
					</div>
				</div>
			</div>
		)
	};
};

class Botao extends Component {

	render(){
		return(
			<div>
				<button className="botao" onClick={this.props.acaoBtn}>{this.props.nome}</button>
			</div>
		)
	};
};

export default App;
