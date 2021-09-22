import React, { useState, useEffect } from 'react';
import axios from 'axios';
import api from '../../api';
export const MasterList = () => {
    const [list, setList] = useState([]);
    useEffect(() => {
        api.get('/documents')
            .then((response) => {
                setList(response.data);
                console.log(response.data)
            })
            .catch(() => console.log('Ruim'))
    }, [])
    return (
        <div>
            <h1>Novo MasterList</h1>
            {list.map((item) =>
                <div>{item.title}</div>
            )}
        </div>
    )
}
