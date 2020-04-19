import React, { Component } from "react";
import { MDBBtn } from "mdbreact";

export class Submit extends Component {
    state = {
        result: true,
        marks: 0,
        total: 0
    }
    componentDidMount(){
        var ans = this.props.ans
        var sel = this.props.select
        console.log(ans, sel);
        var r = 0
        for (var i in ans){
         if (ans[i] == sel[i]){
            r +=1
         }
        }
        if (r > Object.keys(ans).length/2){
            this.setState({
                result: true,
                marks: r,
                total:  Object.keys(ans).length
            })
        }else{
            this.setState({
                result: false,
                marks: r,
                total:  Object.keys(ans).length
            })
        }
        
    }

    playAgain = () =>{
      window.location.reload()
    }
  render() {
    if (this.state.result){
        var result = <div><h1 className="text-center green-text mt-5 font-weight-bold">{this.state.total}/{this.state.marks}</h1><br/><img width="500px" src="https://github.com/pratikdeshmukh2004/images/blob/master/small-group-students-jumping-happily-260nw-60226846-removebg-preview.png?raw=true"/></div>
    }else{
        var result = <div><h1 className="text-center red-text mt-5 font-weight-bold">{this.state.total}/{this.state.marks}</h1><br/><img width="500px" src="https://github.com/pratikdeshmukh2004/images/blob/master/girls-crying-illustration-set-49696087-removebg-preview.png?raw=true"/></div>
    }
    return (
      <div>
        <div class="container2">
          <div class="avatar">
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/751678/skytsunami.png"
                alt="Skytsunami"
              />
          </div>
          <h1  className="textav">Your Result</h1>
            {result}
            <MDBBtn onClick={this.playAgain} outline size="lg" className="white-text mt-5 font-weight-bold">Play Again</MDBBtn>
        </div>
      </div>
    );
  }
}

export default Submit;
