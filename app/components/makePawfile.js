import React, {Component} from "react";
import helper from "../config/helper";

class makePawfile extends Component
{
  constructor()
  {
    super();
    this.state = {
      name: "",
      species: "",
      breed: "",
      sex: "",
      age: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleInputChange(event) {
    var newState = {};
    newState[event.target.id] = event.target.value;
    this.setState(newState);
  }

  handleButtonClick()
  {
    var picData = new FormData();
    var file = document.getElementById("file").files[0];
    picData.set('photo', file);
    let newPawfile = {
      name: this.state.name,
      species: this.state.species,
      breed: this.state.breed,
      sex: this.state.sex,
      age: this.state.age
      //need to add pic here, will figure out tomorrow.
    };

    helper.makePawfile(newPawfile).then(results => {
        helper.addProfPic(results.data.id, picData).then(res => {
          console.log("this worked?");
        });
    });
  }

  render()
  {
    return (
    <div className="col s 12 l8 offset-l2">
        <div className="row">
            <h5> Create a new Pawfile </h5>
          <form className="col s12" encType="multipart/form-data">
          <div className="file-field input-field">
              <div className="btn btn-floating">
                  <span><i className="material-icons">add</i></span>
                  <input id='file' name="photo" type="file" />
              </div>

              <div className="file-path-wrapper">
                  <input id="photo" className="file-path validate" type="text" />
                  <label htmlFor="photo"> Add a Photo</label>
              </div>
          </div>
            <div className="row">
              <div className="input-field col s12">
                <input value={this.state.name} onChange={this.handleInputChange} id="name" type="text" className="validate"/>
                <label htmlFor="name"> Pet Name</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input value={this.state.species} onChange={this.handleInputChange} id="species" type="text" className="validate"/>
                <label htmlFor="species">Species</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input value={this.state.breed} onChange={this.handleInputChange} id="breed" type="text" className="validate"/>
                <label htmlFor="breed">Breed</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input value={this.state.sex} onChange={this.handleInputChange} id="sex" type="text" className="validate"/>
                <label htmlFor="sex">Gender</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input value={this.state.age} onChange={this.handleInputChange} id="age" type="number" className="validate"/>
                <label htmlFor="age">Age</label>
              </div>
            </div>
            <button className="btn btn-default" onClick={this.handleButtonClick}>Submit</button>
          </form>
        </div>
    </div>
    );
  }
}

export default makePawfile;
