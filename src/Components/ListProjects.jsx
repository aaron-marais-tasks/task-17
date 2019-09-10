/*
	This file holds the project list
*/

// Import React into script
import React from "react"

// Import styled container and project component
import Container from "./Styled/ListProjects"
import Project from "./Project"

// List of projects component
export default function ListProjectsComponent(props) {
	// List of projects from API
	const [projectList, setProjectList] = React.useState([])

	// componentDidMount simulated; fetch project list from API
	React.useEffect(() => {
		fetch("http://localhost:8000/api")
			.then(body => body.json())
			.then(setProjectList)
	}, [])

	// A project action; handles PUT, POST, DELETE
	const projectAction = (action, proj) => {
		// Use Fetch to execute
		return fetch('http://localhost:8000/api', {
			// Method specified by bound callback below
			method: action,
			// Headers so server knows how to handle data
		    headers: {
		      'Accept': 'application/json',
		      'Content-Type': 'application/json'
		    },
		    // Our JSON body
			body: JSON.stringify(proj)
		})
		// convert to response to JSON
		.then(body => body.json())
		.then(body => {
			// If status is success, update project list
			if(body.status === "success") {
				fetch("http://localhost:8000/api")
					.then(body => body.json())
					.then(body => {
						// Bugs out badly without emptying list first
						setProjectList([])
						setProjectList(body)
					})
			}

			// Return the response if needed in callback
			return body
		})
	}

	// If no project list yet, return null (no display)
	if(!projectList)
		return null

	// Return a container holding projects, 
	return (
		<Container>
			{projectList.map((item, key) =>
				// Map over list and populate with projects
				<Project editing={props.editing} key={key} {...item}
					update={projectAction.bind(null, "PUT")}
					delete={projectAction.bind(null, "DELETE")} />
			)}
			{props.editing ? <Project empty add={projectAction.bind(null, "POST")} /> : null}
		</Container>
	)
}
