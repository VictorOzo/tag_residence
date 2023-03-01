import './service.css';
import serviceimg from '../../../images/serviceimg.png';
import investmentimg from '../../../images/investmentimg.png';
import smarthomeimg from '../../../images/smarthomeimg.png';
import innovationimg from '../../../images/innovationimg.png';
import developmentimg from '../../../images/developmentimg.png';

export const Service = () => {
	return (
		<>
			<div className='serviceSection'>
				<div className='serviceimg'>
					<h5>What We Do</h5>
					<h2>Our Main Focus</h2>
                    <img src={serviceimg} alt='' />
                    <div className="serviceimgshadow"></div>
				</div>
				<div className='services'>
					<div className='serviceitem'>
						<img src={investmentimg} alt='' />
						<h4>Investment</h4>
						<p>
							Raising equity for Sponsors. Creating wealth for Investors.
							Invest in commercial real estate at Tag residence
						</p>
					</div>
					<div className='serviceitem'>
						<img src={smarthomeimg} alt='' />
						<h4>Smart Homes</h4>
						<p>
							At the ultimate smart home, you're met with technology
							before you even step through the front door.
						</p>
					</div>
					<div className='serviceitem'>
						<img src={innovationimg} alt='' />
						<h4>Innovation</h4>
						<p>
							Innovations in Commercial Real Estate Preparing for the
							City of the Future" is an industry report from Deloitte
							Global.
						</p>
					</div>
					<div className='serviceitem'>
						<img src={developmentimg} alt='' />
						<h4>Development</h4>
						<p>
							Innovations in Commercial Real Estate Preparing for the
							City of the Future" is an industry report from Deloitte
							Global.
						</p>
					</div>
				</div>
			</div>
		</>
	);
};
