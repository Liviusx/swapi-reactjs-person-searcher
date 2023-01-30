import React, { createContext, useState } from "react";
import { useQuery, gql } from "@apollo/client";


const query = gql`
    query Search($name: String!) {
        searchPerson(name: $name) {
            name
            films {
                title
            }
            vehicles {
                name,
                model
            }
        }
    }
`;

const PersonSearchContext = createContext();

const PersonSearchContextProvider = (props) => {
    const [searchedPerson, setSearchedPerson] = useState("");
    const [queriedPerson, setQueriedPerson] = useState("");
    const { data, loading, error } = useQuery(query, {
        variables: { name: queriedPerson },
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