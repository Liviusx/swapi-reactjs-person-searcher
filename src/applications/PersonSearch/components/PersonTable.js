import usePersonSearch from "../usePersonSearch"
export const PersonTable = () => {
    const { data, loading, error } = usePersonSearch();
    return (
        <>
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
        </>
    )
}
