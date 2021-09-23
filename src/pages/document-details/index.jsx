import React, { useState, useEffect, Fragment } from 'react';
import api from '../../api';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import PageHeader from '../../components/page-header';
import { useParams } from 'react-router-dom';
import { Button } from 'reactstrap';
export const DocumentDetails = () => {
    const [document, setDocument] = useState({});
    const { id } = useParams();
    useEffect(() => {
        api.get(`/documents/${id}`)
            .then(response => setDocument(response.data))
            .catch(error => console.log(error));
    }, []);
    const datePublish = (document.['release-date'] == '' ? 'Não tem' : document.['release-date']);
    return (
        <Fragment>
            <PageHeader
                title="Document Details"
            />
            <div className="container pt-3">

                <Table>
                    <Thead>
                        <Tr>
                            <Th>Code</Th>
                            <Th>Title</Th>
                            <Th>Date</Th>
                            <Th>Publish</Th>
                            <Th>Status</Th>
                            <Th>Processes</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>{document.code}</Td>
                            <Td>{document.title}</Td>
                            <Td>{datePublish}</Td>
                            <Td>{document.published == true ? 'Yes' : 'No'}</Td>
                            <Td>{document.active == true ? 'Active' : 'Inactive'}</Td>
                            <Td>{
                                (typeof (document.processes) == 'object') ?
                                    <ul>
                                        {
                                            document.processes.map((subitem) => <li>{subitem.name}</li>

                                            )}
                                    </ul>
                                    : null}</Td>
                        </Tr>
                    </Tbody>
                </Table>

            </div>
            <a href={'/list'}
                className="mt-3 d-flex align-items-center justify-content-center text-decoration-none">
                <Button color='secondary'>Back</Button>
            </a>
        </Fragment>
    );
}