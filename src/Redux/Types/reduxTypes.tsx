

export interface IdogsType {
	message: string
	status: string

}
export interface IDogsState {
	dogs: IdogsType[]
	searchedDog: IdogsType[]
	loading: boolean
	error: string | null
}

// ! people actions
export enum dogsActionsTypes {
	SEARCH_DOGS = "SEARCH_DOGS",
	GET_DOGS_SUCCESS = "GET_DOGS_SUCCESS",
	GET_DOGS_ERROR = "GET_DOGS_ERROR",
	GET_DOGS_LOADING = "GET_DOGS_LOADING",
}
export interface ISearchDogs {
	type: dogsActionsTypes.SEARCH_DOGS
	payload: IdogsType
}
export interface IDogsSuccess {
	type: dogsActionsTypes.GET_DOGS_SUCCESS
	payload: IdogsType
}
export interface IDogsError {
	type: dogsActionsTypes.GET_DOGS_ERROR
	payload?: string
}

export interface IDogsLoading {
	type: dogsActionsTypes.GET_DOGS_LOADING
}

export type IDogsAction = IDogsSuccess | IDogsError | IDogsLoading | ISearchDogs