import React from 'react';

const ErrorPage = () => {

    const containerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh', // Center vertically within the viewport
      };
    return (
        <div style={containerStyle}>
        <h1 className='text-9xl text-red-700 font-bold'> 404 page</h1>
         
        </div>
    );
};

export default ErrorPage;


