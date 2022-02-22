import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import store from './store';
import BookDetails from './components/BookDetails/BookDetails';
import FavoritesBooks from './components/FavoritesBooks/FavoritesBooks';
import GlobalStyle from './theme/global';

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<GlobalStyle />
			<Routes>
				<Route path="/book/:id" exact={true} element={<BookDetails />} />
				<Route path="/favorites/" exact={true} element={<FavoritesBooks />} />
				<Route path="/" exact={true} element={<App />} />
			</Routes>
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
);
