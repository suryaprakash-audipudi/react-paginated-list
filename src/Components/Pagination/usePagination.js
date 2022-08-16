import { useEffect, useState, useCallback } from "react";
import { defaultPageSize, pageNumberDisplayLimit } from '../../utils/constants';


const usePagination = ({ source }) => {
    const totalRecords = source.length;
    const [pageSize, setPageSize] = useState(defaultPageSize);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(Math.ceil(totalRecords / pageSize));
    const [minPageLimit, setMinPageLimit] = useState(1);
    const [pagedData, setPagedData] = useState([]);

    const nextPage = () => {
        const maxPageLimit = minPageLimit + pageNumberDisplayLimit;
        if (currentPage + 1 >= maxPageLimit) {
            setMinPageLimit(maxPageLimit);
        }
        setCurrentPage(currentPage + 1);
    };
    const prevPage = () => {
        if (currentPage - 1 < minPageLimit) {
            setMinPageLimit(minPageLimit - pageNumberDisplayLimit);
        }
        setCurrentPage(currentPage => currentPage - 1);
    }
    const changePage = (pageNumber) => setCurrentPage(pageNumber);
    const changePageSize = (pageSize) => setPageSize(pageSize);

    const filterPageData = useCallback((page) => {
        const data = [...source];
        const currentPageData = data.splice((page - 1) * pageSize, pageSize);
        setPagedData(currentPageData);
    }, [setPagedData, source, pageSize]);

    useEffect(() => {
        setTotalPages(Math.ceil(totalRecords / pageSize));
        setCurrentPage(1);
        setMinPageLimit(1);
        filterPageData(1);
    }, [pageSize, totalRecords, filterPageData]);

    useEffect(() => {
        filterPageData(currentPage);
    }, [currentPage, filterPageData]);

    return {
        pageSize,
        currentPage,
        totalPages,
        minPageLimit,
        prevPage,
        nextPage,
        changePage,
        changePageSize,
        pagedData
    }

};
export default usePagination;
