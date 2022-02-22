import * as React from 'react';
import { AppBar, Button, Toolbar } from '@material-ui/core';
import { FaHome, FaStar } from 'react-icons/fa';

export default function ButtonAppBar() {
	return (
		<>
			<AppBar color="default" position="static">
				<Toolbar>
					<Button
						style={{
							fontWeight: 'bold',
						}}
						href={`/`}
						startIcon={<FaHome />}
						color="inherit"
					>
						Home
					</Button>
					<Button
						style={{
							fontWeight: 'bold',
						}}
						href={`/favorites`}
						startIcon={<FaStar />}
						color="inherit"
					>
						Favoritos
					</Button>
				</Toolbar>
			</AppBar>
		</>
	);
}
