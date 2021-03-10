import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { ThemeProvider } from "styled-components"
import { BrowserRouter as Router } from 'react-router-dom'
import { DarkTheme } from './utils/themes'

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<ThemeProvider theme={DarkTheme}>
				<App />
			</ThemeProvider>
		</Router>
	</React.StrictMode>,
	document.getElementById('root')
)
