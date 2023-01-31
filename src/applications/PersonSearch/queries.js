import { gql, } from "@apollo/client";

export const GET_PERSON_BY_NAME =
    gql`
    query Search($name: String!) {
        searchPerson(name: $name) {
            name
            films {
                title
            }
            vehicles {
                model
            }
        }
    }`
