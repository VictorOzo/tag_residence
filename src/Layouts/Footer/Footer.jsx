import './footer.css';
import TagLogo from '../../images/TagLogo.png';

export const Footer = () => {

	function topFunction() {
		document.body.scrollTop = 0; // For Safari
		document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
	}
	return (
		<footer>
			<div className='footlogo'>
				<img src={TagLogo} alt='logo' />

				<hr />
				<div className='footIcons'>
					<i className='fa-brands fa-facebook'></i>
					<i className='fa-brands fa-instagram'></i>
					<i className='fa-brands fa-twitter'></i>
					<i className='fa-brands fa-linkedin-in'></i>
				</div>
			</div>
			<div className='footer-col'>
				<h3>Quick Links</h3>
				<li>Home</li>
				<li>About Us</li>
				<li>Service</li>
				<li>Our Properties</li>
				<li>Contact</li>
			</div>
			<div className='footer-col'>
				<h3>Service</h3>
				<li>About Us</li>
				<li>Blogs and Articles</li>
				<li>Terms and Condition</li>
				<li>Privacy Policy</li>
			</div>
			<div className='footer-col'>
				<h3>Contact</h3>
				<p>Address: 098 Thinker Center, Kubwa, Abuja.</p>
				<p>Phone: +234 23654789</p>
				<p>Email:Tagresidences@gmail.com</p>
			</div>

			<div className='copyright'>
				<p>&#169;{new Date().getFullYear()} Tag Residences</p>
				<div className='footer-links'onClick={topFunction}>
					<i className='fa-solid fa-caret-up fa-2xl'></i>
				</div>
			</div>
		</footer>
	);
};
