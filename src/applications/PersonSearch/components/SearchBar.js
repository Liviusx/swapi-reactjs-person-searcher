import usePersonSearch from "../usePersonSearch"

import styled from "styled-components";

const DivContainer = styled.div`
    box-shadow: 0 3px 5px #888888;
    padding: 30px;
`;

const StyledInput = styled.input`
    width: 90%;
    height: 30px;
    padding: 5px;
    border: 1px solid whitesmoke;
    background: whitesmoke;
    margin-right: 5px;
`

export const SearchBar = () => {
    const { searchedPerson, setSearchedPerson } = usePersonSearch();
    return (
        <DivContainer>
            <StyledInput
                placeholder='Type in the name...'
                type="text"
                value={searchedPerson}
                onChange={e => setSearchedPerson(e.target.value)}
            />
            {/* <button onClick={() => setSearchedPerson(searchedPerson)}>Search</button> */}
        </DivContainer>
    )
}