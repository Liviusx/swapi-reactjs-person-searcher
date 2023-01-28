import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { gql } from '@apollo/client';

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

const Search = () => {
    const [searchedName, setSearchedName] = useState("");
    const { data, loading, error } = useQuery(query, {
        variables: { name: searchedName },
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error</p>;

    return (
        <div>
            <input
                placeholder='Type in the name...'
                type="text"
                value={searchedName}
                onChange={e => setSearchedName(e.target.value)}
            />
            <button onClick={() => setSearchedName(searchedName)}>Search</button>
            {data.searchPerson.map(person => (
                <div key={person.name}>
                    <h2>{person.name}</h2>
                    <h3>Films</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>Title</th>
                            </tr>
                        </thead>
                        <tbody>
                            {person.films.map(film => (
                                <tr key={film.title}>
                                    <td>{film.title}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <h3>Vehicles</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {person.vehicles.map(vehicle => (
                                <tr key={vehicle.name}>
                                    <td>{vehicle.name}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ))}
        </div>
    );
};

export default Search;
