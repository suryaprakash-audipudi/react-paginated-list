import usePagination from './usePagination';
import LocksList from '../../LocksList/LocksList';
import Pagination from './Pagination';



const PaginatedList = ({source})=>{    
    const {
        pageSize,
        currentPage,
        totalPages,
        prevPage,
        nextPage,
        changePage,
        changePageSize,
        minPageLimit,
        pagedData
    } = usePagination({source});

    return (
    <div class="pagination-container">    
        <div class="data">        
            <LocksList source={pagedData}/>
        </div>
        <div class="pagination">        
            <Pagination
            pageSize={pageSize} 
            currentPage={currentPage}
            totalPages={totalPages}
            minPageLimit={minPageLimit}
            changePageSize={changePageSize}
            prevPage={prevPage}
            nextPage={nextPage}        
            changePage={changePage}        
            />
        </div>        
    </div>
    )

}
export default PaginatedList;