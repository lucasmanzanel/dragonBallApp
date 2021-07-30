import React from 'react'
import Card from '../components/Card'
import { Characters } from '../models/Characters'

const WomenScreen = () => {

    const woman = Characters.filter( character => character.type === 'm')

    return (
        <div className='container mt-3'>
        <h1 className='text-center'>WOMAN - DB</h1>
        <hr />
        <div className='row'>
        {
            woman.map((woman) => (
            <Card key={woman.id}{...woman}/>
            ))
        }
        </div>
    </div>
    )
}

export default WomenScreen
