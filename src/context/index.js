import React, { useEffect, useState, createContext } from 'react'

export const BeersContext = createContext();


const BeersProvider = (props) => {

    const [beers, setBeers] = useState([]);

    useEffect(() => {

        const fetchBeers = async () => {

            const beers = await fetch(`https://api.punkapi.com/v2/beers`);
            const fetchedBeers = await beers.json();
            setBeers(fetchedBeers);
            // console.log(fetchedBeers);
        }
        fetchBeers();
    }, [])

    return (
        <BeersContext.Provider
            value={{
                beers
            }}
        >
            {props.children}
        </BeersContext.Provider>

    )




}


export default BeersProvider;