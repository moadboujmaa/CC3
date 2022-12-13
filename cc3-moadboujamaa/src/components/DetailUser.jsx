import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

export default function ListPosts() {
    const { id } = useParams()
    const user = useSelector(state => state.users.map(item => item.id === id))
    return (
        <div>
            <div className="title">
                <h1>User Datails</h1>
            </div>
            <div className="info">
                Prenom: {user.firstName}<br/>
                Nom: {user.lastName}<br />
                Age: {user.age}<br/>
                Gender: {user.gender}<br/>
                Email: {user.email}<br/>
                Phone: {user.phone}<br/>
                Weight: {user.weight}<br/>
                Height: {user.height}<br/>
                Weight: {user.weight}<br/>
                Birthdate: {user.Birthdate}<br/>
                Eye color: {user.eyeColor}<br/>
            </div>
        </div>
    )
}