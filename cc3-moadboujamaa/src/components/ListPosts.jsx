import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

export default function ListPosts() {
    const { id } = useParams()
    const users = useSelector(state => state.users.map(item => item.id === id))
    return (
        <div>ListPosts</div>
    )
}
