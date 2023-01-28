import { useContext } from "react";
import { PersonSearchContext } from "./context";

export const usePersonSearch = () => {
    const context = useContext(PersonSearchContext);
    if(context === undefined)
        throw new Error("PersonSearchContext is used outside of its provider");

    return context;
}
export default usePersonSearch;