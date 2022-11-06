import React from "react"
import { useParams } from 'react-router-dom';


class EditEmployee extends React.Component{   
    render = () => {
        return(
            <h3>The selected ID is: {this.props.match.params.id}</h3>
        );
    }
}

export default EditEmployee;