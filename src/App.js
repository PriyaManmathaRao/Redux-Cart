import './App.css';
import AppBar from './Components/AppBar';
import { useEffect } from 'react';
import { Container, ThemeProvider} from '@mui/material'
import theme from './Style/Theme/Index';
import NavigationBar from './Components/CategoryBar';
import PromotionsSlider from './Components/Promotions';
import Promotion from './Components/Promotions';

function App() {
useEffect(()=>{
  document.title="Shopping-Cart"
},[])

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Container 
           maxWidth="xl"
           sx={{
             background:'#fff'
           }}>
          <AppBar/>
          <NavigationBar/>
          <Promotion/>
        </Container>
      </ThemeProvider>
      
    </div>
  );
}

export default App;
