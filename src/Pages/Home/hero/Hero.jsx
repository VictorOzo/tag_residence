import heroimg1 from '../../../images/heroimg1.png';
import heroimg2 from '../../../images/heroimg2.png';
import './hero.css'
export const Hero = () => {
	return (
		<>
			<div className='hero'>
				<div className='heroleftcircle'></div>
				<div className='herotext'>
					<h1>
						Discover Your Next <span>Home</span>
					</h1>
					<hr />
					<p>
						Find a variety of properties that suits you very easily and
						fast
					</p>
					<button type='button'>Discover Now</button>
				</div>
				<div className='heroimg'>
					<img src={heroimg1} alt='' className='heroimg1' />
					<img src={heroimg2} alt='' className='heroimg2' />
				</div>
			</div>
		</>
	);
};
