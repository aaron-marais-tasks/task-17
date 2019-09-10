/*
	This file holds my individual project styling
*/

// Import styled components
import styled from "styled-components"

// The styled project's container should have 550px width, a 2px border, 10px
// border radius, a 15px top margin, a 10px padding, displayed as a column flexbox
export default styled.div`
	width: 550px;
	border: 2px solid rgba(0,0,0,.2);
	border-radius: 10px;
	margin-top: 15px;
	padding: 10px;
	display: flex;
	flex-direction: column;

	/* Our title, url and textarea should have 550px width */
	> .title, > .url, > .description textarea {
		width: 550px;
	}

	/* Our title and url should have be center text */
	> .title, > .url {
		text-align: center;
	}

	/* Align controls to center */
	> .controls {
		align-self: center;

		svg {
			padding: 5px;
		}
	}
`
