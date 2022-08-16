import axios from "axios"
// import { Box } from '@chakra-ui/react';
import '../card.css';

import { useEffect, useState } from "react";
import { Card } from '../Card';

export const All = () => {
    const [data, setData] = useState([]);
    const getData = () => {
        axios.get('https://api.github.com/search/repositories?q=stars:%3E1+language:all')
        .then((r) => {
            console.log(r.data);
            setData(r.data);
        })
        .then((e) => {
            console.log(e.message);
        });
    };

    useEffect(() => {
        getData();
    },[data]);



    return (
        <div className="container">
            {data.items[0] && data.items.map((e) => (
                <Card 
                    name={e.name}
                    fork={e.forks_count}
                    lang={e.language}
                    star={e.stargazers_count}
                />
            ))}
        </div>
    )
}   
