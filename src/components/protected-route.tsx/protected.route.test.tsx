import React from "react";
import { render, screen } from "@testing-library/react";
import { ProtectedRoute } from './proteced-route';
import { AccessContext } from "../../context/access-context";
import { BrowserRouter } from "react-router-dom";

test('renders page if user has access', () => {
    const pageContent = 'pageContent';
    const hasAccess = true;

    render(
        <BrowserRouter>
            <AccessContext.Provider value={{hasAccess, setAccess: () => {}}}>
                <ProtectedRoute path={'/'}>
                    <div>{pageContent}</div>
                </ProtectedRoute>
            </AccessContext.Provider>
        </BrowserRouter>
    )
    
    expect(screen.getByText(pageContent)).toBeInTheDocument();
})

test('does not render page if user does not have access', () => {
    const pageContent = 'pageContent';
    const hasAccess = false;

    render(
        <BrowserRouter>
            <AccessContext.Provider value={{ hasAccess, setAccess: () => { } }}>
                <ProtectedRoute path={'/'}>
                    <div>{pageContent}</div>
                </ProtectedRoute>
            </AccessContext.Provider>
        </BrowserRouter>
    )
    
    const protectedPage = screen.queryByText(pageContent);

    expect(protectedPage).not.toBeInTheDocument();

})