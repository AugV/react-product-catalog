import React from "react";

export const AccessContext = React.createContext({
    hasAccess: false,
    setAccess: (hasAccess: boolean) => {},
});