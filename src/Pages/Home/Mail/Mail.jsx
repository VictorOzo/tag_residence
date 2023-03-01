import './mail.css';

export const Mail = () => {
	return (
		<>
			<div className='mailshadows'>
				<div className='mailshadow1'></div>
				<div className='mailshadow2'></div>
			</div>
			<div className='mailsection'>
				<div className='mailtext'>
					<h2>Want to Get Our Newest Listing?</h2>
					<p>
						You could be the first to hear about our newest listing by signing up for our newsletter.
					</p>
				</div>
				<form>
					<input type='text' placeholder='Enter Your Email'/>
					<input type="submit" value='Register' />
				</form>
			</div>
		</>
	);
};
