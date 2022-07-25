import React, {useState} from "react";
import Nav from "./Nav";
import DisplayHogs from "./DisplayHogs";
import Filter from "./Filter";
import Sort from "./Sort"
import hogs from "../porkers_data";
import Form from "./Form"

function App() {
	const [filteredGreased, setFilteredGreased] = useState(false)
	const [sortedNameWeight, setSortedNameWeight] = useState("")
	const [arrayHogs, setArrayHogs] = useState(hogs)

	return (
		<div className="App">
			<Nav />

			<div>
				<Form hogs={ arrayHogs } setArrayHogs={ setArrayHogs } />
			</div>
			<div>
				<Filter filteredGreased={ filteredGreased } setFilteredGreased={ setFilteredGreased } />
			</div>
			<div>
				<Sort sortedNameWeight={ sortedNameWeight } setSortedNameWeight={ setSortedNameWeight } />
			</div>
			<DisplayHogs hogs={ arrayHogs } filteredGreased={ filteredGreased } sortedNameWeight={ sortedNameWeight } />
			
		</div>
	);
}

export default App;