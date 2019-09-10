import styled from "styled-components"

export default styled.div`
	width: 550px;
	border: 2px solid rgba(0,0,0,.2);
	border-radius: 10px;
	margin-top: 15px;
	padding: 10px;
	display: flex;
	flex-direction: column;

	> .title {
		width: 550px;
		text-align: center;
	}

	> .url {
		width: 550px;
		text-align: center;
	}

	> .description textarea {
		width: 550px;
	}

	> .controls {
		align-self: center;

		svg {
			padding: 5px;
		}
	}
`
