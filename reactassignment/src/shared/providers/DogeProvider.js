import { createContext, useState } from "react";

export const DogeContext = createContext(null);

export const DogeProvider = {( children )} => {
    const [dogeData, setDogeData] = useState();
    return (
        <DogeContext.Provider value={[dogeData, setDogeData]}>
            {children}
        </DogeContext.Provider>
    )
}