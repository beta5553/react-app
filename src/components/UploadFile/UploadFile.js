import React, { Component } from 'react'
import Amplify, { Storage } from 'aws-amplify';
import awsconfig from './aws-exports';

Amplify.configure(awsconfig);

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