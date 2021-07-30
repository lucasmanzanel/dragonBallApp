import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import queryString from 'query-string'
import { Characters } from '../models/Characters'
import Card from '../components/Card'


const SearchScreen = ({history}) => {

    const location = useLocation()
    
    const {q = ''} = queryString.parse(location.search)


    const [inputValue, setInputValue] = useState(q)
    const [characters, setCharacters] = useState([]);

    const handleChange = (e) => {
        const value = e.target.value
        setInputValue(value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        history.push(`?q=${inputValue}`)
    }

    const getCharacters = () => {
        if (inputValue.trim() !== ''){
            const value = inputValue.toLocaleLowerCase()
            const newValue = Characters.filter((character) => 
                character.name.toLocaleLowerCase().includes(value)
                );

            setCharacters(newValue)

        }else{
            setCharacters([])
        }
    }

    useEffect(() => {
        getCharacters()
    }, [q])


    return (
        <div className='container mt-4'>
            <h1>Busqueda</h1>
            <hr />
            <div className="row">
                <div className="col-6">
                    <form onSubmit={handleSubmit}>
                        <label className='form-label w-100'>
                            Personaje: 
                            <input 
                                placeholder='Ingrese aquí el nombre' 
                                type='text'
                                className='form-control' 
                                autoComplete='off' 
                                value={inputValue}
                                onChange={handleChange}
                            >
                            </input>
                        </label>
                        <button 
                        type='submit' 
                        className='btn btn-success w-100'>Buscar</button>
                    </form>
                </div>
                <div className="col-6">
                    <h2>Resultado: {characters.length}</h2>
                    {
                        characters.length === 0 && (
                            <div className='alert alert-warning text-center'>
                                Ingrese un personaje existente
                            </div>
                        )
                    }

                    {
                        characters.map(character => 
                        <Card key={characters.id} {...character}/>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default SearchScreen
