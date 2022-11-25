import { useState } from "react";
import Airport from "../types/airport";
import { AppContext } from "./app.context";

type Props = {
  children: React.ReactNode;
};
export const AppProvider: React.FC<Props> = ({ children }) => {
  const [allAirports, setAllAirports] = useState<Airport[]>([]);

  return (
    <AppContext.Provider value={{ allAirports, setAllAirports }}>
      {children}
    </AppContext.Provider>
  );
};
