import React from 'react';
import './CardPost.css'

const CardPost = ({title, subtitle, text, imageUrl, createdAt}) => 
        <div className="post">
            <div className="post_image">
                <img src={imageUrl} alt={imageUrl} />
            </div>
            <div className="post_title">
                <h1>{title}</h1>
                <h2>{subtitle}</h2>
            </div>
            <div className="post_text">
                <p className="post_tekst">{text}</p>
            </div>
            <div className="post_footer">
               Created at: <span>{createdAt}</span>
            </div>
        </div>

 
export default CardPost;