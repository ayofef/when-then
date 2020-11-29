import React from 'react';
import PropTypes from "prop-types";


import sprite from "../../../assets/icons/sprite.svg";
import face from "../../../assets/images/face.jpg";

import classes from "./CardContent.module.scss";
import {capitalize} from "../../Utilities/capitalize";




//Stateless component that displays the user details, comments and likes icon
// some of the first letter of the text from our api came with a lower case, so I created a reusable funtion that automaticall transforms the first letter of of the first word to uppercase




const CardContent = ({text, ownerName, likes, comments, image, liked, handleLiked, comment, handleComment}) => {

    

    return(
        <div className={classes.CardContent}>

            { //do not display the image tag if image url is missing from our api
               image && <img className={classes.CardContent__Image} src={image} alt={text}/>
            }
            
            <p className={classes.CardContent__Heading}>{capitalize(text)}</p>

            <div className={classes.CardContent__Footer}>

                <div className={classes.CardContent__Footer___User}>
                    <img src={face} alt=" by Alexander Krivitskiy - Unsplash"/>
                    <p>{ownerName}</p>
                </div>

                <div className={classes.CardContent__Footer___Utilities}>
                    <div className={classes.CardContent__Footer___Utilities_Like} onClick={handleLiked}>
                        <svg style={{fill: liked ? "red" : "#777"}}>
                            <use xlinkHref={sprite + "#icon-heart"} />
                        </svg>
                        <p>{likes}</p>
                    </div>
                    <div className={classes.CardContent__Footer___Utilities_Comment} onClick={handleComment}>
                        <svg  style={{fill: comment ? "blue": "#777"}}>
                            <use xlinkHref={sprite + "#icon-chat_bubble"} />
                        </svg>
                        <p>{comments}</p>
                    </div>
                </div>

            </div>


            
        </div>
    )
}


CardContent.propTypes = {
    text: PropTypes.string.isRequired,
    ownerName: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    comments: PropTypes.number.isRequired,
    liked: PropTypes.bool.isRequired,
    comment: PropTypes.bool.isRequired,
    handleLiked: PropTypes.func.isRequired,
    handleComment: PropTypes.func.isRequired


  };

export default CardContent;