import React from 'react';
import { gql } from '@apollo/client';
import { PersonSearchContextProvider } from './context';
import { SearchBar } from './components/SearchBar';
import { PersonTable } from './components/PersonTable';

const PersonSearchApplication = () => {
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

