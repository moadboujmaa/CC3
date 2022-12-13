import React from 'react'
import { NavLink } from 'react-router-dom'

export default function User(props) {
    return (
        <div className='user'>
            <img src={props.info.image} alt="profile-pic" />
            <p className='username'>{props.info.firstName} {props.info.lastName}</p>
            <NavLink to={`/DetailUser/${props.info.id}`} >Detail User</NavLink>
            <NavLink to={`/ListPosts/${props.info.id}`} >List Posts</NavLink>
        </div>
    )
}
