/*
	This file holds my sidebar
*/

// import React into scope
import React from "react"

// Import sidebar container and font awesome icon into file
import Container from "./Styled/Sidebar"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Export sidebar component
export default function SidebarComponent(props) {
	return (
		<Container>
			{/* Single item in sidebar to toggle editing */}
			<FontAwesomeIcon icon="pen" onClick={props.setEditing} />
		</Container>
	)
}
