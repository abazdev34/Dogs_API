
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './compononts/Header'
import Home from './compononts/Home'
import Dogs from './compononts/Dogs'
function App() {
	

	


	return (
		<div className="App">

<Header/>
<Routes>
		
	<Route path='/home' element={<Home/>}/>
	<Route path='/dogs' element={<Dogs/>}/>
</Routes>
		</div>
	)
}

export default App
