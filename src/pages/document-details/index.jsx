import React, { useState, useEffect } from 'react';
import api from '../../api';
import PageContent from '../../components/page-content';
import PageHeader from '../../components/page-header';
import { useParams } from 'react-router-dom';

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
        <div>
            <PageHeader
                title="Document Details"
            />
            <PageContent>
                <div>
                    Code: {document.code}
                </div>
                <div>
                    Title: {document.title}
                </div>
                <div>
                    Date: {datePublish}
                </div>
                <div>
                    Publish: {document.published == true ? 'Yes' : 'No'}
                </div>
                <div>
                    Status: {document.active == true ? 'Active' : 'Inactive'}
                </div>
                <div>
                    Processes:
                    {
                        (typeof (document.processes) == 'object') ?
                            <div>
                                {
                                    document.processes.map((subitem) => <div>{subitem.name}</div>

                                    )}
                            </div>
                            : null}
                </div>
            </PageContent>
        </div>
    );
}