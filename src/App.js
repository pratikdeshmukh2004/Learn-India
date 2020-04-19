import "./App.css";
import NavbarPage from "./components/header";
import Content from "./components/Content";
import React, { Component } from "react";
import Question from "./components/Question";
import Submit from "./components/Submit";

export class App extends Component {
  state = {
    content: 0,
    questions: [
      "Which of the following is the capital of Arunachal Pradesh?",
      "What are the major languages spoken in Andhra Pradesh?",
      "What is the state flower of Haryana?",
      "Which of the following states is not located in the North?",
      "In which state is the main language Khasi?",
      " Which is the largest coffee producing state of India?",
      "Which state has the largest area?",
      "Which state has the largest population?",
      "In what state is the Elephant Falls located?",
      "which is the longest animal in the world?"
    ],
    options: [
      ["Itanagar", "Dispur", "Imphal", "Panji"],
      [
        "English and Telugu",
        "Telugu and Urdu",
        "Telugu and Kannada",
        "All of the above languages",
      ],
      ["Lotus", "Rhododendron", "Golden Shower", " Not declared"],
      ["Jharkhand", "Jammu and Kashmir", "Himachal Pradesh", "Haryana"],
      ["Mizoram", "Nagaland", "Meghalaya", "Tripura"],
      ["Kerala", "Tamil Nadu", "Karnataka", "Arunachal Pradesh"],
      ["Maharashtra", "Madhya Pradesh", "Uttar Pradesh", "Rajasthan"],
      ["Uttar Pradesh", "Maharashtra", "Bihar", "Andra Pradesh"],
      ["Mizoram", "Orissa","Manipur","Meghalaya"],
      ["Pythons and Anacondas", "Jiraf", "Cow and Dog", "Elephant"]
    ],
    selected: {},
    ans: { 1: 0, 2: 1, 3: 0, 4: 0, 5: 2, 6: 2, 7: 3, 8: 0, 9: 3,10: 0 },
  };

  onstart = () => {
    this.setState({
      content: 1,
    });
  };

  onNext = () => {
    this.setState({
      content: this.state.content + 1,
    });
  };

  onPreviw = () => {
    this.setState({
      content: this.state.content - 1,
    });
  };

  select = (id) => {
    var mainlist = this.state.selected;
    mainlist[this.state.content] = id;
    this.setState({
      selected: mainlist,
    });
  };

  onExit = () => {
    this.setState({
      content: 0,
      selected: {},
    });
  };

  onSubmit = () => {
    this.setState({
      content: "submit",
    });
  };

  render() {
    if (this.state.content == 0) {
      var main = <Content start={this.onstart} />;
    } else if (this.state.content == "submit") {
      var main = <Submit select={this.state.selected} ans={this.state.ans} />;
    } else {
      var main = (
        <Question
          submit={this.onSubmit}
          listlength={this.state.questions.length}
          exit={this.onExit}
          select={this.select}
          selected={this.state.selected[this.state.content]}
          previw={this.onPreviw}
          next={this.onNext}
          question={this.state.questions[this.state.content - 1]}
          options={this.state.options[this.state.content - 1]}
          num={this.state.content}
        />
      );
    }
    return (
      <div className="App">
        <NavbarPage />
        {main}
      </div>
    );
  }
}

export default App;
