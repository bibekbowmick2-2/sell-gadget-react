import React from 'react';
import StatisticBar from './StatisticBar';
import { useLoaderData } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Statistics = () => {
    const data = useLoaderData();
    return (
        <div>
        <Helmet>
        <title>Statistic</title>
      </Helmet>
            <StatisticBar data={data}></StatisticBar>
        </div>
    );
};

export default Statistics;