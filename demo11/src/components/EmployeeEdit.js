import React from "react"
import { useParams } from 'react-router-dom';

function EditEmployee(){   
    const {id} = useParams();    
    return(
        <h3>The selected ID is: {id}</h3>
    );
}

export default EditEmployee;