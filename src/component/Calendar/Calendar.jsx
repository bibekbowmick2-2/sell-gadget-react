import React from 'react';
import { Calendar, theme } from 'antd';
import { Helmet } from 'react-helmet-async';

const onPanelChange = (value, mode) => {
  console.log(value.format('YYYY-MM-DD'), mode);
};

const Calendars = () => {
  const { token } = theme.useToken();
  
  const wrapperStyle = {
    // width: 500,
    border: `1px solid ${token.colorBorderSecondary}`,
    borderRadius: token.borderRadiusLG,
  };

 

  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 justify-center items-center mt-10 lg:mt-0 '>
    <Helmet>
        <title>Calendar</title>
      </Helmet>
    <div>
        <h1 className='text-6xl text-lime-400 font-bold p-7'>Calender</h1>
    </div>
      <div style={wrapperStyle} className='mt-5 lg:mt-0 w-[420px] lg:w-[550px]  p-4'>
        <Calendar fullscreen={false} onPanelChange={onPanelChange} />
      </div>
    </div>
  );
};

export default Calendars;
