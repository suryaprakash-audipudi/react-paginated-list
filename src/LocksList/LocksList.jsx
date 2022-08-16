import './LocksList.css';
import Input from './Input';
const DisplayLocks = ({source})=>{ 
    
    const changeInput = (input,name,id)=>{
        // update source and send it
    }
    return (
            <div className="locks-list">{
                        source.map(({id,name,capabilities,model,status},index)=><div className="lock" key={`${name}-${id}`}>
                            <div className="lock-item">{`${name}`}</div>
                            <div className="lock-item">{status}</div>
                            <div className="lock-item"><Input name={name} id={id} changeInput={changeInput}/></div>
                            <div className="lock-item"><button disabled={status!=='active'}>Lock/Unlock</button></div>
                    </div>)
                    }
            </div>
    )

}
export default DisplayLocks;