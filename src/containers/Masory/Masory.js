import React, { useState, useEffect} from 'react';
import { Masonry } from "masonic";

import axios from "../../axiosInstance";

import Card from "../../components/Card/Card";



//Satefull component that display our card in a masory layout and also makes a request to our api.

const MasoryContainer = () => {

    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get()
        .then((res) => {
            const apiData = res.data;
            setData(apiData);
            //console.log(apiData);
        })
        .catch((err) => {
            setError(err);
        });

    },[])

    //For the purpose of this task I will only return an error message, an error page/component will be built in a real project.
    if(error) return <h1>Somthing Went Wrong</h1>

    return(
        < >
            {/* {
                data && data.map((el, index) => {
                    return <Card key={el.id} {...el}/>
                })
            } */}

        <Masonry
            style={{outline: "none"}}

          // Provides the data for our grid items
          items={data}

          // Adds 10px of space between the grid cells
          columnGutter={10}

          // Sets the minimum column width to 172px
          columnWidth={172}

          // Pre-renders 5 windows worth of content
          overscanBy={5}

          // This is the grid item component
          render={Card}
        />
        </>
    )
}


export default MasoryContainer;