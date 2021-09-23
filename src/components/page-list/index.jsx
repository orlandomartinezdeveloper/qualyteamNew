import React, { Fragment } from 'react';

import './index.css';
const PageList = ({ code, title, date, processes, action }) => {
    return (
        <Fragment>
            <tbody>
                <td>{code}</td>
                <td>{title}</td>
                <td>{date}</td>
                <td>{processes}</td>
                <td>{action}</td>
            </tbody>
        </Fragment>
    )
};
export default PageList;