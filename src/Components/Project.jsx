/*
	This file holds the project component
*/

// Import React into script scope
import React from "react"

// Import styled container and font awesome icon into script
import Container from "./Styled/Project"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Individual project component
export default function ProjectComponent(props) {
	// Used for displaying and updating
	const [inputTitle, setTitle] = React.useState(props.title)
	const [inputUrl, setUrl] = React.useState(props.url)
	const [inputDescription, setDescription] = React.useState(props.description)

	// If is empty, return a dialogue to add a new item
	if(props.empty) return (
		<Container>
			{/* Input items */}
			<div className="title">
				<input placeholder="Title" onChange={e => setTitle(e.target.value)} />
			</div>
			<div className="url">
				<input placeholder="URL" onChange={e => setUrl(e.target.value)} />
			</div>
			<div className="description">
				<textarea placeholder="Description" onChange={e => setDescription(e.target.value)} />
			</div>

		    {/* Control for adding */}
			<div className="controls">
				<FontAwesomeIcon onClick={() => {
					// Add item on icon click
					props.add({
						// Compose object of title, url and description
						title: inputTitle,
						url: inputUrl,
						description: inputDescription
					}).then(body => {
						// Once added, check if successful; if is, clear state
						if(body.status === "success") {
							setTitle("")
							setUrl("")
							setDescription("")
						}
					})
				}} icon="plus" />
			</div>
		</Container>
	)

	// If editing, return a similar composition to above
	if(props.editing) return (
		<Container>
			{/* Input items */}
			<div className="title">
				<input placeholder="Title" value={inputTitle} onChange={e => setTitle(e.target.value)} />
			</div>
			<div className="url">
				<input placeholder="URL" value={inputUrl} onChange={e => setUrl(e.target.value)} />
			</div>
			<div className="description">
				<textarea placeholder="Description" value={inputDescription} onChange={e => setDescription(e.target.value)} />
			</div>

		    {/* Controls for updating and deleting */}
			<div className="controls">
				<FontAwesomeIcon onClick={() => {
					// Update usng ID
					props.update({
						id: props.id,
						title: inputTitle,
						url: inputUrl,
						description: inputDescription
					})
				}} icon="save" />
				<FontAwesomeIcon onClick={() => {
					// Delete usng ID
					props.delete({
						id: props.id
					})
				}} icon="minus" />
			</div>
		</Container>
	)

	// Normal display of items
	return (
		<Container>
			<div className="title">
				<a href={inputUrl}>
					{inputTitle}
				</a>
			</div>
			<div>
				{inputDescription}
			</div>
		</Container>
	)
}
