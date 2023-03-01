import './agents.css';
import agentimg1 from '../../../images/agentimg1.png';
import agentimg2 from '../../../images/agentimg2.png';
import agentimg3 from '../../../images/agentimg3.png';

export const Agents = () => {
	return (
		<>
			<div className='agentSection'>
				<div className='agenttext'>
					<h1>Meet Our Agents</h1>
				</div>
				<div className='agents'>
					<div className='agentitem'>
						<img src={agentimg1} alt='' />
						<h2>Johnny Elvis</h2>
						<p>Real Estate Agent</p>
					</div>
					<div className='agentitem'>
						<img src={agentimg2} alt='' />
						<h2>Jasmine Webb</h2>
						<p>Real Estate Agent</p>
					</div>
					<div className='agentitem'>
						<img src={agentimg3} alt='' />
						<h2>Phoebe Buffay</h2>
						<p>Real Estate Agent</p>
					</div>
				</div>
			</div>
		</>
	);
};
