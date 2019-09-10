/*
	This file holds my core application
*/

// Import React into script scope
import React from 'react'

// Import sidebar and project list components
import Sidebar from "./Components/Sidebar"
import ListProjects from "./Components/ListProjects"

function App() {
	// State for editing
	const [editing, setEditing] = React.useState(false)

	// Toggle editing state
	const setEditingCallback = () => setEditing(!editing)
  return (
    <>
      	<Sidebar setEditing={setEditingCallback} />
      	<ListProjects editing={editing} />
    </>
  );
}

export default App;
