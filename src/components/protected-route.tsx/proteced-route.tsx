import React, { useContext, useEffect } from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { AccessContext } from '../../context/access-context';
import { NavigationService } from '../../services/navigation-service';

const ProtectedRoute: React.FC<RouteProps> = (props) => {
    const { hasAccess } = useContext(AccessContext);

    useEffect(() => {
        if (!hasAccess) {
            alert('Must check Checkbox');
        }
    }, [hasAccess])
    
    return (
        <Route {...props}>
            {
                hasAccess
                    ? props.children
                    : <Redirect to={NavigationService.LANDING_PATH} />
            }
        </Route>
    )
}

export { ProtectedRoute };
