import React, { useEffect, useState } from 'react';
import './App.css';
import { Provider, defaultTheme, Flex, Grid, View, Image } from '@adobe/react-spectrum';
import About from './components/About';
import Work from './components/Work';
import Footer from './components/Footer';
import Contact from './components/Contact';
import desktopImage from './assets/Desk-bg.jpeg';
// import mobileImage from './Mob-bg.jpeg';
import LoadingScreen from './components/LoadingScreen';
import NamePlate from './assets/NeonName.gif';

function App() {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => setLoading(false), 6000);
    }, []);
    return (
        <>
            {loading === false ? (
                <Provider theme={defaultTheme} colorScheme='dark'>
                    <div className='App' style={{ backgroundImage: `url(${desktopImage})` }}>
                        <Grid
                            areas={['header  header', 'content content', 'footer  footer']}
                            columns={['1fr', '3fr']}
                            rows={['auto', 'auto', 'auto']}
                            height='auto'
                            gap='size-100'
                        >
                            <View
                                gridArea='header'
                                display='flex'
                                justifySelf='center'
                                alignSelf='center'
                                marginTop='5%'
                                width='50%'
                            >
                                <Image src={NamePlate} alt='NamePlateWhite' margin='auto' justifySelf='center' />
                            </View>

                            <View gridArea='content' display='flex' justifySelf='center' marginTop='size-100'>
                                <Flex direction='column' width='size-2000' gap='size-200' marginTop='20%'>
                                    <About />
                                    <Work />
                                    <Contact />
                                   
                                </Flex>
                            </View>
                            <View gridArea='footer' margin='auto'>
                                <Flex
                                    direction='row'
                                    width='size-2000'
                                    gap='size-1000'
                                    alignSelf='center'
                                    justifySelf='center'
                                    marginTop='25%'
                                    paddingLeft='20px'
                                >
                                    <Footer />
                                </Flex>
                            </View>
                        </Grid>
                    </div>
                </Provider>
            ) : (
                <LoadingScreen />
            )}
        </>
    );
}

export default App;
