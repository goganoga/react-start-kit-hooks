import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDataAction } from 'actions';

const Index = () => {
    const test = useSelector(state => state.test);
    const dispatch = useDispatch();

    useEffect(() => {
        fetchDataAction(dispatch);
    }, []);

    let {data} = test;

    return (
        <div>
            <ul>
                {data.map((item, i) =>
                    (<li key={i}>{item.url}</li>)
                )}
            </ul>
        </div>
    );
}

export default Index;
