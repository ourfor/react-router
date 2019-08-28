import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';

function Index(){
	return <h2>Index</h2>
}

function About(){
	return <h2>About</h2>
}

function Users(){
	return <h2>Users</h2>
}

function AppRouter(){
	return (
		<Router>
			<div>
				<nav>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/about/">About</Link>
					</li>
					<li>
						<Link to="/users/">Users</Link>
					</li>
				</nav>
				<Route path="/" component={Index} />
				<Route path="/about/" component={About} />
				<Route path="/users/" component={Users} />
			</div>
		</Router>
	);
}

export default AppRouter;

class Test extends Component{
	render(){
		return <h1>Hello React</h1>
	}
}

ReactDOM.render(<Test />,document.getElementById("route"));

