import React, { use } from 'react';
import { MoneyContext } from './FamillyTree';

const Brother = () => {
// use and useContext  babohar kora jay for context
    const [money, setMoney] = use(MoneyContext)


    return (
        <div>
            <h3>brother</h3>
            <button onClick={() => setMoney(money + 1000)}>Add 1000 Taka</button>
        </div>
    );
};

export default Brother;