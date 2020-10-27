import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store,persistor } from './redux/store'
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.render(
	<Provider store={store}>
		{/* You need to add provider to your entire App so it gets all the properties needed */}
		<BrowserRouter>
			<PersistGate persistor={persistor}>
			<Route component={App} />	
			</PersistGate>
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
);
