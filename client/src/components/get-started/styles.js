import styled from 'react-emotion';
import { colors, unit } from '../../styles';

const FullCotainer = styled('div')({
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
});

const InnerContainer = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: '2% 5%',
    borderRadius: unit * 2,
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
});

const Button = styled('button')({
    backgroundColor: colors.primary,
    width: '80%',
    color: 'white',
    fontSize: '1.2em',
    padding: '10px 20px',
    marginTop: 20,
    marginBottom: 20,
    border: 'none',
    borderRadius: unit
});

const Logo = styled('img')({
    marginTop: 20,
    maxWidth: 150,
    borderRadius: unit
});

export { FullCotainer, Button, InnerContainer, Logo }; 