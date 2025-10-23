import React from 'react';
import Spacial from './Spacial';
import Friend from './Friend';

const Cousion = ({name, asset}) => {
    return (
        <div>
            <h3>{name}</h3>
            {
                name === 'tom tom' && <Spacial asset={asset}></Spacial>
            }

            {
                name === 'jo jppo' && <Friend></Friend>
            }
            
        </div>
    );
};

export default Cousion;