import usePersonSearch from "../usePersonSearch"
import styled from "styled-components";

const PersonName = styled.h2`
    text-align: left;
    background: whitesmoke;
    padding: 5px;
    border: 1px solid gray;
    margin: 0;
`;

const Container = styled.div`
    height: 500px;
    overflow: auto;
`;

const StyledLi = styled.li`
    text-align: left;
`;

const Table = styled.table`
    width: 100%;
    text-align: center;   
`

export const PersonTable = () => {
    const { data, loading, error } = usePersonSearch();
    if (loading) {
        return <p>Loading.....</p>
    }
    if (error) {
        return <p>Error occured while loading the component</p>
    }
    if(data.searchPerson.length === 0)
    {
        return <p>No data found!</p>
    }

    return (
        <Container>
            {data.searchPerson.map(person => (
                <div key={person.name}>
                    <PersonName >{person.name}</PersonName>
                    <Table>
                        <tbody>
                            <td style={{ width: 150}}><h3>Films</h3></td>
                            <td>
                                <ul style={{ width: 200}}>
                                    {person.films.map(film => (
                                        <StyledLi key={film.title}>
                                            {film.title}
                                        </StyledLi>
                                    ))}
                                </ul>
                            </td>
                            <td style={{ width: 150}}><h3>Vehicles</h3></td>
                            <td>
                                <ul style={{ width: 200}}>
                                    {person.vehicles.map(vehicle => (
                                        <StyledLi key={vehicle.name}>
                                            <td>{vehicle.name}</td>
                                        </StyledLi>
                                    ))}
                                    {
                                        person.vehicles.length == 0 && <StyledLi>None</StyledLi>
                                    }
                                </ul>
                            </td>
                        </tbody>
                    </Table>
                </div>
            ))}
        </Container>
    )
}
