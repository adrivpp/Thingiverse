import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'react-emotion';
import { colors, unit } from '../styles';

export default function NavBar({ history }) {
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

const NavContainer = styled('nav')({
    backgroundColor: colors.accent,
    color: 'white',
    position: 'fixed',
    width: '100%',
    top: 0,
});

const InnerNav = styled('div')({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: unit * 4,
    margin: '0 auto',
    maxWidth: '60%'
});

const StyledLink = styled(Link)({
    textDecoration: 'none',
    color: 'white'
});
