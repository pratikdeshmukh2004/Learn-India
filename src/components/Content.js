import React, { Component } from 'react'
import { MDBBtn } from 'mdbreact';
import Typist from 'react-typist';
export class Content extends Component {

    render() {
        return (
            <div className="martop white-text container text-center">
                <Typist>
                <h1 className="h1">Welcome To Learn India.</h1>
                </Typist>
                <h3 className="h4 text-left mt-5">
                    India is a union of states. There are 29 states and 7 union territories in India.
                     Each State/UT of India has a unique demography, history, culture, dress, festivals, language,
                      etc. Here we have covered the questions which have been frequently asked in various Exams.
                </h3>
                <img src="https://github.com/pratikdeshmukh2004/images/blob/master/students.png?raw=true"/>
                <br/>
                <MDBBtn onClick={this.props.start} outline size="lg" className="white-text mt-5 font-weight-bold">Start Learning.</MDBBtn>
            </div>
        )
    }
}

export default Content
