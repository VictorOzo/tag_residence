export const Card = ({item}) => {
	return (
		<>
			<div className='listings'>
				<img src={item.img} alt='' />
				<div className='listdetails'>
					<h2>{item.title}</h2>
                    <p>{item.details}</p>
					<div className="listlink">
						<h3>{item.price}</h3>
						<a href='/'>Details</a>
					</div>
				</div>
			</div>
		</>
	);
};
