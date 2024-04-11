import { IShowCaseContext, InitialFilters } from "./types";
import { createContext } from "react";

export const ShowCaseContext = createContext<IShowCaseContext>({
    filters:         InitialFilters,
    showCaseListRef: null as any,
    neighborhoodRef: null as any,
    stateRef:        null as any,
    storeRef:        null as any,
    typeRef:         null as any,
    cityRef:         null as any,
    setFilters:      () => {},
    setLike:         () => {},
    like:            "N" 
})