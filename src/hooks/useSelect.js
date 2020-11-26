import React, {useState} from 'react';

const useSelect = (stateInicial, options) => {

    const [state, setState] = useState(stateInicial);
    
    const SelectNews = () => (
        <select className="browser-default"
            value={state}
            onChange={e => setState(e.target.value)}
        >
            {options.map(option => (
                <option key={option.value} value={option.value}>{option.label}</option>
            ))}

        </select>
    );

    return [state, SelectNews];
}
 
export default useSelect;