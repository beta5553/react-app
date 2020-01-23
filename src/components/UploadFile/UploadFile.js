import React, { Component } from 'react'

class UploadFile extends Component {

    render() {
        return(
            <div>
                <form>
                    <input type="file" /> 
                    <input type="submit" />
                </form>
            </div>
        )
    }

}

export default UploadFile