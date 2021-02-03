import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { Card } from './card';

test('card contains object data and handles click', () => {
    let cardClicked = false;

    const object = {
        imageSrc: 'https://raw.githubusercontent.com/TeliaSweden/frontend-interview-api/master/images/brands/alcatel_front_270x540.png',
        title: 'Nokia',
        function: () => { 
            cardClicked = true; 
        },
    }

    render(
        <Card 
            imageSrc={object.imageSrc}
            title={object.title}
            onClick={object.function} 
        />
    )

    expect(screen.getByText(object.title)).toBeInTheDocument();
    expect(cardClicked).not.toBe(true);

    userEvent.click(screen.getByText(object.title));
    
    expect(cardClicked).toBe(true);
})