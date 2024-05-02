import axios from 'axios'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { IDogBreedsResponse } from '../Types/reduxTypes'

export const Dogs = () => {
  const [breeds, setBreeds] = useState<{ [key: string]: string[]}  | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [selectedBreed, setSelectedBreed] = useState<string>('')
  const [images, setImages] = useState<string[]>([])
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchBreeds = async () => {
      setLoading(true)
      try {
        const response = await axios.get<IDogBreedsResponse>('https://dog.ceo/api/breeds/list/all')
        setBreeds(response.data.message)
      } catch (error) {
        console.error("API сурамында ката чыкты:", error)
      }
      setLoading(false)
    }

    fetchBreeds()
  }, [])

  const handleSearch = async (breed: string) => {
    setLoading(true)
    setSelectedBreed(breed)
    try {
      // Туура URL менен сурам жасоо
      const response = await axios.get(`https://dog.ceo/api/breed/${breed}/images`)
      setImages(response.data.message)
    } catch (error) {
      console.error("API сурамында ката чыкты:", error)
    }
    setLoading(false)
  }

  return (
    <div>
      {loading ? (
        <p>Жүктөлүүдө...</p>
      ) : (
        <div>
          {breeds && Object.keys(breeds).map((breed, index) => (
            <button key={index} onClick={() => handleSearch(breed)}>
              {breed}
            </button>
          ))}
          {selectedBreed && (
            <div>
              <h2>{selectedBreed}</h2>
              <div>
                {images.map((image, index) => (
                  <img key={index} src={image} alt={selectedBreed} />
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}export const Dogs = () => {
  const [breeds, setBreeds] = useState<{ [key: string]: string[]}  | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [selectedBreed, setSelectedBreed] = useState<string>('')
  const [images, setImages] = useState<string[]>([])
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchBreeds = async () => {
      setLoading(true)
      try {
        const response = await axios.get<IDogBreedsResponse>('https://dog.ceo/api/breeds/list/all')
        setBreeds(response.data.message)
      } catch (error) {
        console.error("API сурамында ката чыкты:", error)
      }
      setLoading(false)
    }

    fetchBreeds()
  }, [])

  const handleSearch = async (breed: string) => {
    setLoading(true)
    setSelectedBreed(breed)
    try {
      // Туура URL менен сурам жасоо
      const response = await axios.get(`https://dog.ceo/api/breed/${breed}/images`)
      setImages(response.data.message)
    } catch (error) {
      console.error("API сурамында ката чыкты:", error)
    }
    setLoading(false)
  }

  return (
    <div>
      {loading ? (
        <p>Жүктөлүүдө...</p>
      ) : (
        <div>
          {breeds && Object.keys(breeds).map((breed, index) => (
            <button key={index} onClick={() => handleSearch(breed)}>
              {breed}
            </button>
          ))}
          {selectedBreed && (
            <div>
              <h2>{selectedBreed}</h2>
              <div>
                {images.map((image, index) => (
                  <img key={index} src={image} alt={selectedBreed} />
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

