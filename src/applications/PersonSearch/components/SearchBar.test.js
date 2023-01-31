import { render, screen } from "@testing-library/react";
import {SearchBar} from "./SearchBar";
import { MockedProvider } from "@apollo/client/testing";
import { PersonSearchContextProvider } from "../context";

it("input renders without errors", async () => {
    const result = render(
        <MockedProvider mocks={[]} addTypename={false}>
            <PersonSearchContextProvider>
                <SearchBar />
            </PersonSearchContextProvider>
        </MockedProvider>
    );
    expect(result.container.querySelector("input")).toBeInTheDocument();
    expect(result.container.querySelector("button")).toBeInTheDocument();
});