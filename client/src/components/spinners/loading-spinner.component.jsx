import React from 'react';

const LoadingSpinner = () => {
	return (
		<Spinner animation='grow' role='status' variant='dark'>
			<span className='sr-only'>Loading...</span>
		</Spinner>
	);
};

export default LoadingSpinner;
