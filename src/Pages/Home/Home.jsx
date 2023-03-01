import { About } from './About/About';
import { Hero } from './hero/Hero';
import { Service } from './Service/Service';
import { Listing } from './Listing/Listing';
import { Agents } from './Agents/Agents';
import { Mail } from './Mail/Mail';


export const Home = () => {
	return (
		<div className='home'>
			<Hero />
			<About />
			<Service />
			<Listing />
			<Agents />
			<Mail/>
		</div>
	);
};
