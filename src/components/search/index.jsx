import React, { useState, useEffect } from 'react';
import './index.css'
export const Search = (props) => {
    const handleSearch = props.handleSearch;
    const [busca, setBusca] = useState('');
    console.log(busca);
    const passText = () => {
        handleSearch(busca);
    };
    useEffect(passText, [busca, handleSearch])
    return (
        <div className="search__module">
            <div clasName="search__cBotoes">
                <div className="search__busqueda">
                    <input type="text" className="search__inputGrand" placeholder="Qual documento você está procurando?"
                        value={busca}
                        onChange={
                            (event) => {
                                setBusca(event.target.value);
                            }
                        }
                        aria-label="Recipient's username" aria-describedby="basic-addon2" />
                    <span className="search__lupa"><i className="fa fa-search "></i></span>
                </div>
            </div>
        </div>
    )
}
