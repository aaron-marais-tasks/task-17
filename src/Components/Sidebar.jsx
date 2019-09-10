import React from "react"
import Container, * as Sidebar from "./Styled/Sidebar"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function SidebarComponent(props) {
	return (
		<Container>
			<FontAwesomeIcon icon="pen" onClick={props.setEditing} />
		</Container>
	)
}
