import styled from 'styled-components'
import '@styles/roboto.css';
import { Home } from '@pages/Home/Home'

const AppStyled = styled.div`
  background-color: #232323;
  width: 100%;
  height: 100%;
  position: relative;
  font-family: "Roboto", sans-serif;
  color: #ffffff;
`;

const App = () => (
  <AppStyled>
    <Home />
  </AppStyled>
)

export { App };