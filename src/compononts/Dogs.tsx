import { useEffect } from 'react'
import "./dogs.css"
import { UseTypedDispatch } from '../Redux/hooks/useTypedDispatch'
import { useTypedSelectorHook } from '../Redux/hooks/useTypedSelectorHook'
const Dogs = () => {
	const dogs = useTypedSelectorHook(state => state.user.dogs)
	const{searchDogs} = UseTypedDispatch()
const searchedDog = useTypedSelectorHook(state => state.user.searchedDog)
console.log('searchedDog', searchedDog)
	const { getDogs } = UseTypedDispatch()
	useEffect(() => {
		getDogs()
	}, [])
	console.log('dogs', dogs.message);
	
	return (
		<div>
			<button
					className='btn'
					onClick={() => getDogs()}
				>
					Башка ит
				</button>
			<div className='dogs'>
				<img className='dog_img ' src={dogs.message} alt='' />
			
				<div className="search">
					<input onChange={(e) => searchDogs(e.target.value)} type="text" placeholder="Search" />
					<img className='search_img ' src={searchedDog.message} alt="" />

				</div>
			</div>
		
		</div>
	);
};

export default Dogs;