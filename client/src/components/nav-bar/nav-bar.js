import React from 'react';

import { StyledLink, InnerNav, NavContainer } from './styles';

export default function NavBar() {
    return (
        <NavContainer>
            <InnerNav>
                <StyledLink to='/popular'>Popular</StyledLink>
                <StyledLink to='/featured'>Featured</StyledLink>
                <StyledLink to='/newest'>Newest</StyledLink>
            </InnerNav>
        </NavContainer>
    );
}


