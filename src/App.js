import React, { useEffect } from 'react';
import './App.css';
import {Provider, defaultTheme, Flex, Grid, View, Image} from '@adobe/react-spectrum';
import About from './components/About';
import Work from './components/Work';
import Footer from './components/Footer';
import Contact from './components/Contact';
import desktopImage from './Desk-bg.jpeg';
import mobileImage from './Mob-bg.jpeg';
import NamePlate from './NamePlate.svg';

function App() {
    const setWindowWidth = window.innerWidth;
    const imageUrl = window.innerWidth >= 650 ? desktopImage : mobileImage;

    const handleWindowResize = () => {
           setWindowWidth(window.innerWidth);
       };

       useEffect(() => {
           window.addEventListener('resize', handleWindowResize);

           return () => {
               window.removeEventListener('resize', handleWindowResize);
           }
       });
  return (
    
    <Provider theme={defaultTheme}>
      <div className="App" style={{backgroundImage: `url(${imageUrl})` }}>
          <Grid
            areas={['header  header', 'content content', 'footer  footer']}
            columns={['1fr', '3fr']}
            rows={['size-1000', 'auto', 'size-1000']}
            height="auto"
            gap="size-100"
          >

            <View gridArea="header" display="flex" justifySelf="center" alignSelf="center">
            
            <Image  src={NamePlate} alt="NamePlateWhite" marginTop="50%"
        />
             
             </View>

            <View 
            gridArea="content" 
            display="flex" 
            justifySelf="center" 
            marginTop="size-100" > 

            <Flex direction="column" width="size-2000" gap="size-200" marginTop="70%">
              <About/>
              <Work/>
              <Contact/>
             </Flex>

            </View>
            <View gridArea="footer" margin="auto" 
            >
            <Flex direction="row" width="size-2000" gap="size-1000" alignSelf="center" justifySelf = "center" marginTop="25%" paddingLeft="20px"
            
            >
            <Footer/>
            </Flex>
            </View>
          </Grid>
        </div>
    </Provider>
   
  );
}

export default App;
