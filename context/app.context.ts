import { createContext, useContext } from "react";
import Airport from "../types/airport";

type AppContextType = {
  allAirports: Airport[];
  setAllAirports: (value: Airport[]) => void;
};

const AppContextDefaultValue: AppContextType = {
  allAirports: [],
  setAllAirports: () => null,
};

export const AppContext = createContext<AppContextType>(AppContextDefaultValue);

export const useApp = () => useContext(AppContext);
