import React, { useState } from 'react'
import Routess from './components/Route'
import InputField from './components/inputFieldAll/InputField';

export default function App() {
	const [expenses, setExpenses] = useState()
	console.log(expenses);
	return (
		<div>
			{/* <InputField setExpenses={setExpenses} /> */}
			<Routess />
		</div>
	)
}
