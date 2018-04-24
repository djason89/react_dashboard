import React, { Component } from "react";
import "./semantic/dist/semantic.min.css";



class Stuff extends Component {
    constructor(props){
     super(props);
     //this.state={inputfield: "no value"};
     this.stepName="";
     this.userUnit="";
     this.test="";
     this.handleClick = this.handleClick.bind(this);
     this.updateInputValue = this.updateInputValue.bind(this);
    }

    handleClick() {
      alert("input "+ this.stepName+"/"+this.userUnit);
    }

    testClick() {
      axios.get('http://localhost:8089/tempTest?input='+this.test)
        .then(function (response) {
          alert(response);
          console.log(response);
        })
        .catch(function (error) {
          alert(error);
          console.log(error);
        });
    }

    updateInputValue(evt) {
      this.stepName= evt.target.value;
    }

    updateInputValue2(evt) {
      this.userUnit=evt.target.value;
    }
    updateInputValue3(evt) {
      this.test=evt.target.value;
    }

	  render() {
		      return (
			            <div>
                  <h2>실제 마이그레이션 트리거 </h2>

                  <p> 전체 마이그레이션 (user-> calendar -> schedule) <button class="ui button active">Trigger</button> </p>
                  <form class="ui form">
                    <textarea placeholder="Tell us more" rows="3">
                    </textarea>
                  </form>

                  <p> 단일 마이그레이션 (단계 선택) </p>

                  <div class="ui focus input">
                      <input type="text" placeholder="step Name" onChange={evt=> this.updateInputValue(evt)}/>
                  </div>

                  <div class="ui focus input">
                      <input type="text" placeholder="user select 단위" onChange={evt=> this.updateInputValue2(evt)}/>
                  </div>

                  <button class="ui button active" onClick={this.handleClick}>Trigger</button>
                  <form class="ui form">
                    <textarea placeholder="Tell us more" rows="3">
                    </textarea>
                  </form>

                  <p> 전체 마이그레이션 (user-> calendar -> schedule) </p>


                  <div class="ui focus input">
                    <input type="text" placeholder="user select 단위" onChange={evt=> this.updateInputValue3(evt)}/>
                  </div>
                  <button class="ui button active" onClick={this.testClick}>Trigger</button>

                  <form class="ui form">
                    <textarea placeholder="Tell us more" rows="3">
                    </textarea>
                  </form>

			            </div>
			          );
		    }
}

export default Stuff;
