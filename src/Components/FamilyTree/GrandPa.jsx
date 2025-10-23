import React from 'react';
import Dad from './Dad';
import Uncle from './Uncle';
import Aunty from './Aunty';

const GrandPa = ({asset}) => {
    return (
        <div>
            <h3>Grand pa</h3>
            <section className='flex'>
                <Dad asset={asset}></Dad>
                <Uncle></Uncle>
                <Aunty asset={asset}></Aunty>
            </section>
        </div>
    );
};

export default GrandPa;