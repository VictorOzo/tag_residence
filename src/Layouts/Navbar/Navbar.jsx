import './navbar.css';
import TagLogo from '../../images/TagLogo.png';

export const Navbar = () => {
	return (
		<nav>
			<div className='navlogo'>
				<a href='/'>
					<img src={TagLogo} alt='logo' />
				</a>
			</div>
			<div className='navigation'>
				<ul>
					<li>
						<a href='/'>Home</a>
					</li>
					<li>
						<a href='/aboutus'>About Us</a>
					</li>
					<li>
						<a href='/services'>Services</a>
					</li>
					<li>
						<a href='/properties'>Our Properties</a>
					</li>
					<li>
						<a href='/contact'>Contact</a>
					</li>
				</ul>
			</div>
			<button type='button' className='navbtn'>
				Sign Up
			</button>
		</nav>
	);
};
