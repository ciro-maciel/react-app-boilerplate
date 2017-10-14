import React from 'react'
import injectSheet from 'react-jss'

const styles = {
	button: {
		display: 'inline-block',
		font: 'inherit',
		background: 'linear-gradient(#fafafa, #eaeaea)',
		color: '#666665',
		padding: '1px 7px',
		margin: '0 3px',
		border: '1px solid #c5c5c5',
		borderRadius: '2px',
		cursor: 'pointer',
		outline: 'none'	,
		'&:hover':{
			background: 'linear-gradient(#fafafa, #d9d9d9)',
			border: '1px solid #bdbdbd'
		}
	},
	buttonSuccess:{
		backgroundColor: 'red'
	},
	label: {
		fontWeight: 'bold'
	}
}

const Button = ({classes, style, children, type}) => {

	let className;

	switch (type) {
		case 'success':
			className = classes.buttonSuccess
			break;
		default:
			className = classes.button
			break;
	}

	return (
		<button className={className} style={style}>
			<span className={classes.label}>
				{children}
			</span>
		</button>
  	)
}

export default injectSheet(styles)(Button)