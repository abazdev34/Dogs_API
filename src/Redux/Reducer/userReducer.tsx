import { IDogsAction, dogsActionsTypes, IDogsState } from '../Types/reduxTypes'

const initialState: IDogsState = {
	dogs:{message:"",status:""} ,
	searchedDog:{message:"",status:""},
	loading: false,
	error: "",
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
				dogs: {message:"",status:""},
				loading: true,
				error: "",
			}
		case dogsActionsTypes.GET_DOGS_SUCCESS:
			return {
				...state,
				dogs: action.payload,
				loading: false,
				error:"",
			}

		case dogsActionsTypes.GET_DOGS_ERROR:
			return {
				...state,
				
				dogs:{message:"",status:""} ,
				loading: false,
				error: action.payload!,
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
