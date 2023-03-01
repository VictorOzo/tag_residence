import './listing.css';
import { Card } from '../../../Components/Card/Card';
import listingimg1 from '../../../images/listingimg1.png';
import listingimg2 from '../../../images/listingimg2.png';
import listingimg3 from '../../../images/listingimg3.png';

export const Listing = () => {
	const data = [
		{
			id: 1,
			img: `${listingimg1}`,
			title: '5 Bedroom Duplex (700) [VA-1]',
			details:
				'Spacious living room, dinning and bedrooms en suite with toilets and baths. Sit Out. Laundry, 2 Bedroom BQ, Study. Relaxation Spot. Gym. Parking space for 6 cars',
			price: '$5,000,000',
		},

		{
			id: 2,
			img: `${listingimg2}`,
			title: '4 Bedroom Penthouse (600) [VA-2]',
			details:
				'Spacious living room, dinning and bedrooms en suite with toilets and baths. Sit Out. Laundry, 2 Bedroom BQ, Study. Relaxation Spot. Gym. Parking space for 6 cars',
			price: '$3,000,000',
		},
		{
			id: 3,
			img: `${listingimg3}`,
			title: '4 Bedroom Terrace (700) [VA-1]',
			details:
				'Spacious living room, dinning and bedrooms en suite with toilets and baths. Sit Out. Laundry, 2 Bedroom BQ, Study. Relaxation Spot. Gym. Parking space for 6 cars',
			price: '$4,500,000',
		},
	];
	return (
		<>
			<div className='listingContainer'>
				<div className='listshadow'></div>
				<div className='listingtext'>
					<h2>Discover Our Feature Listing</h2>
					<hr />
					<p>
						Amet minim mollit non deserunt ullamco est sit aliqua dolor do
						amet sint. Velit officia consequat duis enim velit mollit.
					</p>
				</div>
				<div className='listitem'>
					{data.map((item) => (
						<Card item={item} key={item.id} />
					))}
				</div>
				<div className='listarrows'>	
					<i className='fa-solid fa-arrow-left fa-2xl'></i>
					<i className='fa-solid fa-arrow-right fa-2xl'></i>
				</div>
			</div>
		</>
	);
};
