import React, { useState, useEffect } from 'react';
import api from '../../api';
import { Table } from '../../components/table';
import { Search } from '../../components/search';
export const MasterList = (props) => {
    const [list, setList] = useState([]);
    const handleSearch = props.handleSearch;
    const busca = props.busca;
    const url = '/documents'
    const endPoint = `${url}?q=${busca}`
    useEffect(() => {
        api.get(endPoint)
            .then((response) => {
                setList(response.data);
                console.log(response.data)
            })
            .catch(() => console.log('Ruim'))
    }, [busca])
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
        const ButtonAction = <a href={`/document-details/${item.id}`}><button>Enter</button></a>
        const datePublish = (item.['release-date'] == '' ? 'Não tem' : item.['release-date']);
        const newRow = new rows(item.code, item.title, datePublish, mapProcesses, ButtonAction);
        (rowsTable).push(newRow);

    })
    console.log(rowsTable);
    return (
        <div>
            <Search handleSearch={handleSearch} />
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
        </div>
    )
}
