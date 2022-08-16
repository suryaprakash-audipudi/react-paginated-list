import React, {useState,useEffect } from 'react';
import PaginatedList from '../Components/Pagination/PaginatedList';
const LocksListContainer = ()=>{
    const [source,setSource] = useState([]);

    const getSource = async () => {
        const response = await fetch('./lock_list.json');
        const result = await response.json();
        setSource(result.locks);
    }
    useEffect(()=>{
        getSource();
    },[]);
   
    return Array.isArray(source) && !!source.length && <PaginatedList source={source}/>;
}
export default LocksListContainer;