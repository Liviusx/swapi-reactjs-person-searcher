import usePersonSearch from "../usePersonSearch"
export const SearchBar = () => {
    const {searchedPerson, setSearchedPerson} = usePersonSearch();
    return (
        <div>
            <input
                placeholder='Type in the name...'
                type="text"
                value={searchedPerson}
                onChange={e => setSearchedPerson(e.target.value)}
            />
            <button onClick={() => setSearchedPerson(searchedPerson)}>Search</button>
        </div>
    )
}