import './about.css';
import aboutimg from '../../../images/aboutimg.png';

export const About = () => {
	return (
		<>
			<div className='aboutheader'>
				<h2>About Us</h2>
			</div>
			<div className='aboutsection'>
				<div className='aboutimg'>
					<div className='imgshadow'></div>
					<img src={aboutimg} alt='' />
				</div>

				<div className='abouttext'>
					<div className='rightcircle'>
						{/* <div className='aboutrightcircle'></div> */}
					</div>

					<h5>About Us</h5>
					<h3>
						We Are Providing The Top <span>Real Estate </span>Property In
						Abuja and Lagos
					</h3>
					<p>
						Tag Residence is your go to realty firm that deals with the
						selling and building of Real Estate Properties. With years of
						hard work and productivity you are sure to rely on our trusted
						service towards getting you your dream home Tag Residence is
						your go to realty firm that deals with the selling and
						building of Real Estate Properties. With years of hard work
						and productivity you are sure to rely on our trusted service
						towards getting you your dream home.
					</p>
					<div className='aboutbtn'>
						<a className='btn1' href='*'>
							Learn More
						</a>
						<a className='btn2' href='*'>
							Contact Us
						</a>
					</div>
				</div>
			</div>
		</>
	);
};
