import React, { createContext, useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { GET_PERSON_BY_NAME } from "./queries";


const PersonSearchContext = createContext();

const PersonSearchContextProvider = (props) => {
    const [searchedPerson, setSearchedPerson] = useState("Darth Maul");
    const [queriedPerson, setQueriedPerson] = useState("Darth Maul");
    const { data, loading, error } = useQuery(GET_PERSON_BY_NAME, {
        variables: { name: queriedPerson } 
    });

    return (
        <PersonSearchContext.Provider
            value={{
                searchedPerson, setSearchedPerson,
                data, loading, error,
                queriedPerson, setQueriedPerson
            }}>
            {props.children}
        </ PersonSearchContext.Provider >
    )
}

export { PersonSearchContext, PersonSearchContextProvider };