import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import  {Footer } from './Layouts/Footer/Footer';
import { Navbar } from './Layouts/Navbar/Navbar';
import { Home } from './Pages/Home/Home';
import { NotFound } from './Pages/Notfound/NotFound';

function App() {
	return (
		<Router>
			<div className='App'>
				<Navbar />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='*' element={<NotFound />} />
				</Routes>
			</div>
			<Footer />
		</Router>
	);
}

export default App;
