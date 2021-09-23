import React, { useState, useEffect } from 'react';
import api from '../../api';
import { Table } from '../../components/table';
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
    const ButtonAction = <button>Entrar</button>
    const rowsTable = []
    class rows {
        constructor(code, title, date, processes, action) {
            this.code = code;
            this.title = title;
            this.date = date;
            this.processes = processes;
            this.action = action;
        }
    }
    const mapArray = list.map((item) => {
        const mapProcesses = item.processes.map((subitem) => subitem.name);
        const newRow = new rows(item.code, item.title, item.['release-date'], mapProcesses, ButtonAction);
        (rowsTable).push(newRow);

    })
    console.log(rowsTable);
    return (
        <div>
            <h1>Novo MasterList</h1>
            <Table
                header={[
                    {
                        title: "Code",
                        column: "code"
                    },
                    {
                        title: "Title",
                        column: "title"
                    },
                    {
                        title: "Date",
                        column: "date"
                    },
                    {
                        title: "Processes",
                        column: "processes"
                    },
                    {
                        title: "Action",
                        column: "action"
                    }
                ]}

                rows={rowsTable}
                itemsPerPage={5}
            />

            {/*<table>
                <thead>
                    <tr>
                        <th>Code</th>
                        <th>Title</th>
                        <th>Date</th>
                        <th>Processes</th>
                        <th>Action</th>
                    </tr>
                </thead>
                {list.map((item) =>
                    <PageList
                        code={item.code}
                        title={item.title}
                        date={(item.['release-date']) == '' ? 'Não tem' : item.['release-date']}
                        processes={item.processes.map((subitem) => subitem.name)}
                        action={ButtonAction}
                    />
                )}
                </table>*/}
        </div>
    )
}
