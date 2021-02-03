import React, { useState } from 'react';
import { AccessContext } from '../context/access-context';

const AccessManager: React.FC = (props) => {
    const [hasAccess, sethasAccess] = useState(false)
    
    function setAccess(hasAccess: boolean) {
        sethasAccess(hasAccess);
    }

    return(
        <AccessContext.Provider value={{ hasAccess: hasAccess, setAccess }}>
            {props.children}
        </AccessContext.Provider>
    )
}

export { AccessManager };
