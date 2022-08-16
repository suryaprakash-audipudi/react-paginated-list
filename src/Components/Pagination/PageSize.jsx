import { defaultPageSize, pageSizeOptions } from "../../utils/constants";

const PageSize = ({pageSize=defaultPageSize,changePageSize})=>{
    const onChange = (e)=>changePageSize(e.target.value);
    return <select value={pageSize} onChange={onChange}>
        {pageSizeOptions.map((val,index)=>(<option key={val} value={val}>{val}</option>))}
    </select>
};
export default PageSize;