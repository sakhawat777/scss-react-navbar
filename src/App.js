import Layout from './components/Layout';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import About from './pages/About';

function App() {
	return (
		<Layout>
			<Switch>
				<Route path='/' exact>
					<Home />
				</Route>
				<Route path='/services'>
					<Services />
				</Route>
				<Route path='/portfolio'>
					<Portfolio />
				</Route>
				<Route path='/about'>
					<About />
				</Route>
				<Route path='/contact'>
					<Contact />
				</Route>
			</Switch>
		</Layout>
	);
}

export default App;
