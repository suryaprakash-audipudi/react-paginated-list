import './pagination.css';
import { pageNumberDisplayLimit } from '../../utils/constants';
import PageSize from './PageSize';

const Pagination = ({currentPage,prevPage,nextPage,changePage,totalPages,minPageLimit,pageSize,changePageSize})=>{
    const pages = ()=>{
        const pageNumbers = new Array(pageNumberDisplayLimit).fill('');
        return pageNumbers.map((value,index)=>{
            const pageNumber = minPageLimit+index;
            return (pageNumber <= totalPages) ? <li className={`page ${currentPage === pageNumber? 'active':''}`}><button onClick={()=>changePage(pageNumber)}>{pageNumber}</button></li> : null;
        })
    };
    return (
    <ul className='pages-container'>
        <li className='page'><PageSize pageSize={pageSize} changePageSize={changePageSize}/></li>
        <li className='page'><button disabled={currentPage === 1} onClick={prevPage}>Prev</button></li>
        {
            pages()
        }
        <li className='page'><button disabled={currentPage === totalPages} onClick={nextPage}>Next</button></li>
    </ul>
)
}
export default Pagination;