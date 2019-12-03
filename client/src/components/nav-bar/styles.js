import styled from '@emotion/styled';
import { colors, unit } from '../../styles';

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
    justifyContent: 'space-evenly',
    padding: unit * 4,
    margin: '0 auto',
});

const StyledLink = styled('a')(({isSelected}) => ({
    textDecoration: 'none',
    color: isSelected ? colors.primary : 'white'
}));

export { StyledLink, InnerNav, NavContainer }; 