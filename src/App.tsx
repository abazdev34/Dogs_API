import { useEffect } from 'react'
import './App.css'
import { UseTypedDispatch } from './Redux/hooks/useTypedDispatch'
import { useTypedSelectorHook } from './Redux/hooks/useTypedSelectorHook'
function App() {
	const dogs = useTypedSelectorHook(state => state.user.dogs)
	const{searchDogs} = UseTypedDispatch()
const searchedDog = useTypedSelectorHook(state => state.user.searchedDog)
	const { getDogs } = UseTypedDispatch()
	useEffect(() => {
		getDogs()
	}, [])

	console.log('searchedDog', searchedDog)


	return (
		<>
			<div className='flex items-center justify-center px-4'>
				<img className='w-96 h-96 ' src={dogs.message} alt='' />

				<button
					className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-16'
					onClick={() => getDogs()}
				>
					Башка ит
				</button>
				<div className="search">
					<input onChange={(e) => searchDogs(e.target.value)} type="text" placeholder="Search" />
					{/* <img className='w-96 h-96 border border-white ' src={searchedDog.message} alt="" /> */}
				</div>
			</div>
		</>
	)
}

export default App
