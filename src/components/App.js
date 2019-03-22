import React, { useContext, useEffect } from 'react';
import { Store } from '../utils/store';
import { fetchDataAction } from '../actions';
import './App.css';

const App = (props) => {
	let { state, dispatch } = useContext(Store);
    useEffect(() => {
        fetchDataAction(dispatch)
    }, [])
	console.log(state)
    return (
        <div>
            <ul>
               {state.test.map((item, i) =>
                    (<li key={i}>{item.url}</li>)
                )}
            </ul>
        </div>
    );
}

export default App;
