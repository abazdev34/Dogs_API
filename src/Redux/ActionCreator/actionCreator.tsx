import axios from 'axios'
import { Dispatch } from 'redux'
import { IDogsAction, IDogsType, dogsActionsTypes } from '../Types/reduxTypes'

export const getDogs =
	() =>
	async (dispatch: Dispatch<IDogsAction>): Promise<void> => {
		try {
			const response = await axios.get<IDogsType>(
				'https://dog.ceo/api/breeds/image/random'
			)

			dispatch({
				type: dogsActionsTypes.GET_DOGS_SUCCESS,
				payload: response.data,
			})
			console.log(response.data)
		} catch (error) {
			dispatch({
				type: dogsActionsTypes.GET_DOGS_ERROR,
				payload: 'it is an Error' || 'Error fetching data',
			})
		}
	}
export const searchDogs =
	(search: string) =>
	async (dispatch: Dispatch<IDogsAction>): Promise<void> => {
		
      try {
			const url = await axios.get<IDogsType>(
				`https://dog.ceo/api/breed/${search}/images/random`
			)

			dispatch({
				type: dogsActionsTypes.SEARCH_DOGS,
				payload: url.data.message,
			})
		} catch (error) {
			console.log(error)
			console.log('searсh', search)
      
		}
	}
