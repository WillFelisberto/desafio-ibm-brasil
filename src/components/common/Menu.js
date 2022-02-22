import * as React from 'react';
import { AppBar, Button, Toolbar } from '@material-ui/core';
import { FaHome, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function ButtonAppBar() {
	return (
		<>
			<AppBar color="default" position="static">
				<Toolbar>
					<Button
						style={{
							fontWeight: 'bold',
						}}
						component={Link}
						to={`/ `}
						startIcon={<FaHome />}
						color="inherit"
					>
						Home
					</Button>
					<Button
						component={Link}
						to={`/favorites`}
						style={{
							fontWeight: 'bold',
						}}
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
