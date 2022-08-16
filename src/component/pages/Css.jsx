import { useEffect, useState } from "react";
import axios from 'axios';
import { Card } from '../Card';
export const Css = () => {

    const [data, setData] = useState([]);
    const getData = () => {
        axios.get('https://api.github.com/search/repositories?q=stars:%3E1+language:css')
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
