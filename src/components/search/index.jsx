import React, { useState, useEffect } from 'react';
export const Search = (props) => {
    const handleSearch = props.handleSearch;
    const [busca, setBusca] = useState('');
    console.log(busca);
    const passText = () => {
        handleSearch(busca);
    };
    useEffect(passText, [busca, handleSearch])
    return (
        <div>
            <div>
                <div>
                    <input type="text" placeholder="Qual documento você está procurando?"
                        value={busca}
                        onChange={
                            (event) => {
                                setBusca(event.target.value);
                            }
                        }
                        aria-label="Recipient's username" aria-describedby="basic-addon2" />
                    <span><i className="fa fa-search "></i></span>
                </div>
            </div>
        </div>
    )
}
