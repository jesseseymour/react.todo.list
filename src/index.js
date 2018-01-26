import React from 'react'
import { render } from 'react-dom'
import App from './App'
import './styles/styles.scss'

window.React = React

render(
	<App />,
	document.getElementById('react-container')
)