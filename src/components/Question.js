import React, { Component } from "react";
import {MDBBtn, MDBIcon} from 'mdbreact';

export class Question extends Component {

    onSelect = (e) =>{
        this.props.select(e.target.id)
    }

  render() {
      if (this.props.num == 1){
        if (this.props.listlength == this.props.num){
          var but2 =  <MDBBtn onClick={this.props.submit} outline size="lg" color="danger" className="white-text mt-5 mr-5 font-weight-bold"><MDBIcon size="lg" className="yellow-text" icon="check" /> Submit</MDBBtn>
        }else{
          var but2 = <MDBBtn onClick={this.props.next} outline size="lg" className="white-text mt-5 ml-5 font-weight-bold">Next <MDBIcon size="lg" className="green-text" icon="angle-double-right" /></MDBBtn>
        }
        var but =  <MDBBtn onClick={this.props.exit} outline size="lg" color="warning" className="white-text mt-5 mr-5 font-weight-bold"><MDBIcon size="lg" className="red-text" icon="times" /> Exit</MDBBtn>
      }else{
        var but =  <MDBBtn onClick={this.props.previw} outline size="lg" color="warning" className="white-text mt-5 mr-5 font-weight-bold"><MDBIcon size="lg" className="red-text" icon="angle-double-left" /> Previw</MDBBtn>
        if (this.props.listlength == this.props.num){
          var but2 =  <MDBBtn onClick={this.props.submit} outline size="lg" color="danger" className="white-text mt-5 mr-5 font-weight-bold"><MDBIcon size="lg" className="yellow-text" icon="check" /> Submit</MDBBtn>
        }else{
          var but2 = <MDBBtn onClick={this.props.next} outline size="lg" className="white-text mt-5 ml-5 font-weight-bold">Next <MDBIcon size="lg" className="green-text" icon="angle-double-right" /></MDBBtn>
        }
      }
    return (
      <div className="martop white-text container text-left">
        <h2 className="h2">
          {this.props.num + ". " +this.props.question}
        </h2><br/>
        <div className="ops">
            {this.props.options.map((item, index)=>{
                if (index == this.props.selected){
                    return(
                        <h4 id={index} className="h4 mb-4 opsel p-3">{["A","B","C","D"][index] +". " +item}</h4>
                    )
                }else{
                    return(
                        <h4 onClick={this.onSelect} id={index} className="h4 op mb-4 p-3">{["A","B","C","D"][index] +". " +item}</h4>
                    )
                }
            })}
        </div>
        <div className="text-center">
            {but}
            {but2}
        </div>
      </div>
    );
  }
}

export default Question;
