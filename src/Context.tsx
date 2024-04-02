import { createContext } from "react";
import { ISelectBox } from "./types";

interface ISelectsRefs {
    neighborhoodRef: ISelectBox, 
    stateRef:        ISelectBox, 
    storeRef:        ISelectBox, 
    typeRef:         ISelectBox, 
    cityRef:         ISelectBox 
}

export const SelectsRefs = createContext<ISelectsRefs>({
    neighborhoodRef: null as any,
    stateRef:        null as any,
    storeRef:        null as any,
    typeRef:         null as any,
    cityRef:         null as any
})