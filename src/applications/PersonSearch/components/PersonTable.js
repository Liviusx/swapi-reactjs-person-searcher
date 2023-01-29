import usePersonSearch from "../usePersonSearch"
import styled from "styled-components";

const PersonNameTitle = styled.h2`
    text-align: left;
    background: whitesmoke;
    padding: 5px;
    border: 1px solid darkgrey;
`;

const Container = styled.div`
    height: 500px;
    overflow: auto;
`;

export const PersonTable = () => {
    const { data, loading, error } = usePersonSearch();
    if (loading) {
        return <p>Loading.....</p>
    }
    if (error) {
        return <p>Error occured while loading the component</p>
    }
    return (
        <Container>
            {data.searchPerson.map(person => (
                <div key={person.name}>
                    <PersonNameTitle >{person.name}</PersonNameTitle>
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
        </Container>
    )
}
