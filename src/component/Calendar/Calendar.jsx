import React from 'react';
import { Calendar, theme } from 'antd';
import { Helmet } from 'react-helmet-async';

const onPanelChange = (value, mode) => {
  console.log(value.format('YYYY-MM-DD'), mode);
};

const Calendars = () => {
  const { token } = theme.useToken();
  
  const wrapperStyle = {
    width: 800,
    border: `1px solid ${token.colorBorderSecondary}`,
    borderRadius: token.borderRadiusLG,
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh', // Center vertically within the viewport
  };

  return (
    <div style={containerStyle}>
    <Helmet>
        <title>Calendar</title>
      </Helmet>
    <div>
        <h1 className='text-6xl text-lime-400 font-bold'>Calender</h1>
    </div>
      <div style={wrapperStyle}>
        <Calendar fullscreen={false} onPanelChange={onPanelChange} />
      </div>
    </div>
  );
};

export default Calendars;
