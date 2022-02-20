import React from 'react';
import { Rings } from 'react-loader-spinner';
export default function Loader() {
	return (
		<>
			<Rings color="white" height="200" width="200" ariaLabel="loading" />;
		</>
	);
}
