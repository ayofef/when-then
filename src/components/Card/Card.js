import React, {useState} from 'react';

import CardContent from "./CardFooter/CardContent";





//Should have been a stateless component but I because of the like and comment functionality, there is a need for visual cue for when the user clicks on like or comment buuton

const Card = ({data}) => {

    

    const [liked, setLiked] = useState(true);
    const [comment, setComment] = useState(false);

    const handleLiked = () => setLiked(!liked);
    const handleComment = () => setComment(!comment);


    

    return(
        <>
            <CardContent 
            {...data} 
            liked={liked} 
            handleLiked={handleLiked} 
            comment={comment} 
            handleComment={handleComment}/>

        </>
    )
}


export default Card;