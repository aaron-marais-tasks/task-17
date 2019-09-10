import React from "react"

import Container from "./Styled/Project"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function ProjectComponent(props) {
	const [inputTitle, setTitle] = React.useState(props.title)
	const [inputUrl, setUrl] = React.useState(props.url)
	const [inputDescription, setDescription] = React.useState(props.description)

	if(props.empty && !props.editing) return null
	if(props.empty && props.editing) return (
		<Container>
			<div className="title">
				<input placeHolder="Title" onChange={e => setTitle(e.target.value)} />
			</div>
			<div className="url">
				<input placeHolder="URL" onChange={e => setUrl(e.target.value)} />
			</div>
			<div className="description">
				<textarea placeHolder="Description" onChange={e => setDescription(e.target.value)} />
			</div>
			<div className="controls">
				<FontAwesomeIcon onClick={() => {
					props.add({
						title: inputTitle,
						url: inputUrl,
						description: inputDescription
					}).then(body => console.log(body))
				}} icon="plus" />
			</div>
		</Container>
	)

	if(props.editing) return (
		<Container>
			<div className="title">
				<input placeHolder="Title" value={inputTitle} onChange={e => setTitle(e.target.value)} />
			</div>
			<div className="url">
				<input placeHolder="URL" value={inputUrl} onChange={e => setUrl(e.target.value)} />
			</div>
			<div className="description">
				<textarea placeHolder="Description" value={inputDescription} onChange={e => setDescription(e.target.value)} />
			</div>
			<div className="controls">
				<FontAwesomeIcon onClick={() => {
					props.update({
						id: props.id,
						title: inputTitle,
						url: inputUrl,
						description: inputDescription
					})
				}} icon="save" />
				<FontAwesomeIcon onClick={() => {
					props.delete({
						id: props.id
					})
				}} icon="minus" />
			</div>
		</Container>
	)

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
