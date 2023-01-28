import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { gql } from '@apollo/client';
import { PersonSearchContextProvider } from './context';
import usePersonSearch from './usePersonSearch';
import { PersonTable } from './components/PersonTable';

const query = gql`
    query Search($name: String!) {
        searchPerson(name: $name) {
            name
            films {
                title
            }
            vehicles {
                name
            }
        }
    }
`;

const PersonSearchApplication = () => {
    const {searchedPerson, setSearchedPerson, data, loading, error} = usePersonSearch();
    return (
        <>
            <PersonSearchContextProvider>
                <SearchBar />
                <PersonTable />
            </PersonSearchContextProvider>
        </>
    )
}
export default PersonSearchApplication;

