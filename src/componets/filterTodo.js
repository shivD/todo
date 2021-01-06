import React, {useEffect} from 'react'; 

const TodoFilter = ({setStatus}) => {

  
     
    return(
        <select onChange={(e)=>setStatus(e.target.value)}>
            <option>All</option>
            <option>Completed</option>
            <option>Uncompleted</option>
        </select>
    )
}
export default TodoFilter;