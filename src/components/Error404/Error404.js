import './Error404.css';
import React from "react";
import { Link } from 'react-router-dom';

export const Error404 = () => {
    return (
        <section id="notFound">
            <img src={require('./404.png')} />
            <p className="reason">The route you have selected is invalid.</p>
            <Link to="/">Now let's go back to home<i className="fa-solid fa-house"></i></Link>
        </section>
    )
}