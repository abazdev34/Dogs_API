import { IDogsAction, dogsActionsTypes, IDogsState } from '../Types/reduxTypes'

const initialState: IDogsState = {
	dogs: [],
	searchedDog: [],
	loading: false,
	error: null,
}

// reducer
export const userReducer = (
	state = initialState,
	action: IDogsAction
): IDogsState => {
	switch (action.type) {
		case dogsActionsTypes.GET_DOGS_LOADING:
			return {
				...state,
				dogs: [],
				loading: true,
				error: null,
			}
		case dogsActionsTypes.GET_DOGS_SUCCESS:
			return {
				...state,
				dogs: action.payload,
				loading: false,
				error: null,
			}

		case dogsActionsTypes.GET_DOGS_ERROR:
			return {
				...state,
				dogs: [],
				
				loading: false,
				error: action.payload,
			}
			case dogsActionsTypes.SEARCH_DOGS:

			console.log(action.payload , "Reducer")
				return {
					...state,
					searchedDog: action.payload
				}
		default:
			return state
	}
}
