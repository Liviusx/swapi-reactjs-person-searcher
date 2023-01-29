import usePersonSearch from "../usePersonSearch"
import { CircularProgress } from "@mui/material";

import styled from "styled-components";

const DivContainer = styled.div`
    box-shadow: 0 3px 5px #888888;
    padding: 30px;
`;

const StyledInput = styled.input`
    width: 90%;
    height: 30px;
    padding: 5px;
    padding-left: 20px
    background: whitesmoke;
    margin-right: 5px;
    font-size: 16px;
`

export const SearchBar = () => {
    const { searchedPerson, setSearchedPerson, loading } = usePersonSearch();
    return (
        <DivContainer>
            <StyledInput
                placeholder='Type in the name of the character...'
                type="text"
                value={searchedPerson}
                onChange={e => setSearchedPerson(e.target.value)}
            />
        </DivContainer>
    )
}