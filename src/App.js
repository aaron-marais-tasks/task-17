import React from 'react';
import logo from './logo.svg';

import Sidebar from "./Components/Sidebar"
import ListProjects from "./Components/ListProjects"

function App() {
	const [editing, setEditing] = React.useState(false)

	const setEditingCallback = () => setEditing(!editing)
  return (
    <>
      	<Sidebar setEditing={setEditingCallback} />
      	<ListProjects editing={editing} />
    </>
  );
}

export default App;
