import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a className='App-link' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
					Learn React
				</a>
			</header>
		</div>
	);
}

const FunApp = () => {
	// Create a Title component that'll render an <h1> tag with some styles
	const Title = styled.h1`
		font-size: 1.5em;
		text-align: center;
		color: palevioletred;
	`;

	// Create a Wrapper component that'll render a <section> tag with some styles
	const Wrapper = styled.section`
		padding: 4em;
		background: papayawhip;
	`;

	const Button = styled.button`
		/* Adapt the colors based on primary prop */
		background: ${props => (props.primary ? 'palevioletred' : 'white')};
		color: ${props => (props.primary ? 'white' : 'palevioletred')};

		font-size: 1em;
		margin: 1em;
		padding: 0.25em 1em;
		border: 2px solid palevioletred;
		border-radius: 3px;
	`;

	// A new component based on Button, but with some override styles
	const TomatoButton = styled(Button)`
		color: tomato;
		border-color: tomato;
	`;

	const BlockButton = styled(Button)`
		display: block;
	`;

	const BlockTomatoButton = styled(BlockButton)`
		color: tomato;
		border-color: tomato;
	`;

	// Use Title and Wrapper like any other React component – except they're styled!
	return (
		<div>
			<Wrapper>
				<Title>Hello World!</Title>
			</Wrapper>
			<div>
				<Button>Normal</Button>
				<Button primary>Primary</Button>
			</div>
			<div>
				<Button>Normal Button</Button>
				<TomatoButton>Tomato Button</TomatoButton>
			</div>
		</div>
	);
};

export default FunApp;
