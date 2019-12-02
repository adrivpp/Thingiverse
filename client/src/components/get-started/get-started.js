import React from 'react';
import { Button, FullCotainer, InnerContainer, Logo } from './styles';
import thingyLogo from '../../images/logo.png'

const handleRedirect = () => {
    window.open(
        process.env.REACT_APP_AUTH_URL, '_self'
    )
}

export default function GetStarted() {
    return (
        <FullCotainer>
            <InnerContainer>
                <Logo src={thingyLogo}/>
                <h1>Welcome to thingy!</h1>
                <p>Give us acces to your thingiverse account to continue</p>
                <Button onClick={handleRedirect}>Let's do it!</Button>
            </InnerContainer>
        </FullCotainer>
    )
}