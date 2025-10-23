import React from 'react';
import Spacial from './Spacial';

const MySelf = ({asset}) => {
    return (
        <div>
            <h3>Myself</h3>
            <Spacial asset={asset}>this is assets: {asset}</Spacial>
        </div>
    );
};

export default MySelf;