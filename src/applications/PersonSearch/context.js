import React, { createContext, useState } from "react";
import { useQuery } from "@apollo/client";

const PersonSearchContext = createContext();

const PersonSearchContextProvider = (props) => {
    const [searchedPerson, setSearchedPerson] = useState("");
    const { data, loading, error } = useQuery(query, {
        variables: { name: searchedPerson },
    });

    return (
        <SwapiContext.Provider value={{ searchedPerson, setSearchedPerson, data, loading, error }}>
            {props.children}
        </ SwapiContext.Provider >
    )
}

export { PersonSearchContext, PersonSearchContextProvider };