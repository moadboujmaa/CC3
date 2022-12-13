import React from 'react'
import { useSelector } from 'react-redux'
import User from './User'

export default function ListUser() {
    const data = useSelector(state => state.users.data)

    return (
        <div className='ListUsers'>
            {data.map(item => <User key={item.id} info={item}/>)}
        </div>
    )
}
