import React, { use } from 'react';
import Cousion from './Cousion'
import { MoneyContext } from './FamillyTree';

const Aunty = ({asset}) => {
    const [money, setMoney] = use(MoneyContext)
    return (
        <div>
            <h3>Auntry</h3>
           <section className='flex'>
             <Cousion asset = {asset} name='tom tom'></Cousion>
            <Cousion name='jo jppo'></Cousion>

            <button onClick={() => setMoney(money + 500)}>Add 500 taka</button>
           </section>
        </div>
    );
};

export default Aunty;