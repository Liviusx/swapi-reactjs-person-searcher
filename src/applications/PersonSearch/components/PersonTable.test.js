import { render, screen } from '@testing-library/react';
import { PersonTable } from './PersonTable';
import { PersonSearchContextProvider } from '../context';
import { MockedProvider } from "@apollo/client/testing";
import { GET_PERSON_BY_NAME } from '../gqlQueries';
import { ApolloProvider } from '@apollo/client';
import { ApolloClient, InMemoryCache } from '@apollo/client';


// Test case where the client connects to the actual graphql API
it("renders without error", async () => {
    const client = new ApolloClient({
        uri: "http://localhost:4002/",
        cache: new InMemoryCache(),
    });
    render(
        <ApolloProvider client={client} addTypename={false}>
            <PersonSearchContextProvider>
                <PersonTable />
            </PersonSearchContextProvider>
        </ApolloProvider>
    );
    expect(await screen.findByText("Loading.....")).toBeInTheDocument();
});


// Test case where the request and result are being mocked
describe("PersonTable component", () => {
    it("should render the component onto the screen", async () => {
        const mocks = [
            {
                request: {
                    query: GET_PERSON_BY_NAME,
                    variables: {
                        name: "Darth Maul"
                    }
                },
                result: {
                    "data": {
                        "searchPerson": [
                            {
                                "birthYear": "54BBY",
                                "films": [
                                    {
                                        "title": "The Phantom Menace"
                                    }
                                ],
                                "hairColor": "none",
                                "name": "Darth Maul",
                                "vehicles": [
                                    {
                                        "model": "FC-20 speeder bike"
                                    }
                                ]
                            }
                        ]
                    }
                }
            }
        ];
        render(
            <MockedProvider mocks={mocks} addTypename={false}>
                <PersonSearchContextProvider>
                    <PersonTable />
                </PersonSearchContextProvider>
            </MockedProvider>
        )
        expect(await screen.findByText("The Phantom Menace")).toBeInTheDocument();
        expect(await screen.findByText("FC-20 speeder bike")).toBeInTheDocument();
    });
});