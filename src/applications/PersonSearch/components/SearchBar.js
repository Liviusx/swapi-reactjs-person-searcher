import usePersonSearch from "../usePersonSearch"
import { CircularProgress } from "@mui/material";

import styled from "styled-components";

const Container = styled.div`
    box-shadow: 0 3px 5px #888888;
    padding: 20px;
`;

const Input = styled.input`
    width: 70%;
    padding: 5px;
    padding-left: 20px
    background: whitesmoke;
    margin-right: 5px;
    font-size: 16px;
`

const Button = styled.button`
    width: 10%;
    height: 32px;
    padding-top: 3px;
`

export const SearchBar = () => {
    const { searchedPerson, setSearchedPerson, loading, setQueriedPerson } = usePersonSearch();

    const onKeyPressHandle = (e) => {
        if(e.keyCode === 13)
            setQueriedPerson(e.target.value)
    }

    return (
        <Container>
            <Input
                onKeyUp={onKeyPressHandle}
                disabled={loading}
                placeholder='Type in the name of the character...'
                type="text"
                value={searchedPerson}
                onChange={e => setSearchedPerson(e.target.value)}
            />
            <Button type="button"
                disabled={loading}
                onClick={() => setQueriedPerson(searchedPerson)}>Search</Button>
        </Container>
    )
}