import React from 'react';
import { useHistory } from 'react-router-dom';

import { InnerContainer, Button } from '../get-started/styles';
import { ErrorContainer } from './styles';

export default function Error({message}) {
    const history = useHistory();
    return (
        <ErrorContainer>
            <InnerContainer>
                <h2>We are sorry, something happened</h2>
                <p>{message ? message : 'Please try again later'}</p>
                <Button onClick={() => history.goBack() }>Ok</Button>
            </InnerContainer>
        </ErrorContainer>
    );
}