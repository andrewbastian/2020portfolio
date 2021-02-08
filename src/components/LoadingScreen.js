import React from 'react';
import Loading from '../assets/Com64Loading.gif';
const LoadingScreen = () => {
    return (
        <div>
            <img src={Loading} alt='loadingpage' style={{ width: '100%' }} />
        </div>
    );
};

export default LoadingScreen;
