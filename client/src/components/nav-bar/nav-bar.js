import React from 'react';
import { useParams } from 'react-router-dom';

import { StyledLink, InnerNav, NavContainer } from './styles';


export default function NavBar() {
    const {category} = useParams();

    return (
        <NavContainer>
            <InnerNav>
                <StyledLink isSelected={category === 'popular'} to='/popular'>Popular</StyledLink>
                <StyledLink isSelected={category === 'featured'} to='/featured'>Featured</StyledLink>
                <StyledLink isSelected={category === 'newest'} to='/newest'>Newest</StyledLink>
            </InnerNav>
        </NavContainer>
    );
}


