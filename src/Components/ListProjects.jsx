import React from "react"

import Container from "./Styled/ListProjects"
import Project from "./Project"

export default function ListProjectsComponent(props) {
	const [projectList, setProjectList] = React.useState([])

	React.useEffect(() => {
		fetch("http://localhost:8000/api")
		.then(body => body.json())
		.then(setProjectList)
	}, [])

	const projectAction = (action, proj) => {
		return fetch('http://localhost:8000/api', {
			method: action,
		    headers: {
		      'Accept': 'application/json',
		      'Content-Type': 'application/json'
		    },
			body: JSON.stringify(proj)
		})
		.then(body => body.json())
		.then(body => {
			if(body.status === "success") {
				fetch("http://localhost:8000/api")
					.then(body => body.json())
					.then(body => {
						setProjectList([])
						setProjectList(body)
					})
			}
			return body
		})
	}

	if(!projectList)
		return null

	return (
		<Container>
			{projectList.map((item, key) =>
				<Project editing={props.editing} key={key} {...item}
					update={projectAction.bind(null, "PUT")}
					delete={projectAction.bind(null, "DELETE")} />
			)}
			<Project editing={props.editing} empty
				add={projectAction.bind(null, "POST")} />
		</Container>
	)
}
