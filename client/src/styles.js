import { injectGlobal } from 'react-emotion';

export const unit = 8;
export const colors = {
  primary: '#EA5469',
  secondary: '#DAE5ED',
  accent: '#243B53',
  background: '#F0F4F8',
  text: 'rgba(16, 42, 67, 0.5)',
};

export default () => injectGlobal({
  [['html', 'body']]: {
    height: '100%',
  },
  body: {
    margin: 0,
    padding: 0,
    fontFamily: 'Lato, sans-serif',
    backgroundColor: colors.background,
    color: colors.text,
  },
  '#root': {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100%',
  },
  '*': {
    boxSizing: 'border-box',
  },
  [['h1', 'h2', 'h3', 'h4', 'h5', 'h6']]: {
    margin: 0,
    fontWeight: 600,
    color: colors.accent
  },
  h1: {
    fontSize: 30,
    lineHeight: 1,
  },
  h2: {
    fontSize: 26,
  },
  h3: {
    fontSize: 18,
  },
  p: {
    margin: 0
  }
});
