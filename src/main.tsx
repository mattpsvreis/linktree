import React from 'react';
import ReactDOM from 'react-dom/client';

import ReactRouter from './routes/ReactRouter';

import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<ReactRouter />
	</React.StrictMode>
);
