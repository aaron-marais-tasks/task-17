/*
	This file holds styling for my sidebar
*/

// Import styled-components
import styled from "styled-components"

// Sidebar should have 100 - .8vw height, 3vw width, .4vw padding, and a right border
export default styled.div`
  height: calc(100vh - .8vw);
  width: 3vw;
  padding: .4vw;

  border-right: 1px solid rgba(0,0,0,.2);

  svg {
  	width: 100% !important;
  	height: auto;
  }
`
