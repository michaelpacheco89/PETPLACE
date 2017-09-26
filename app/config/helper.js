import axios from "axios";

const helper = {

  //route to create user
  makeUser: function(name, username, email, password) {
    var body = {name, username, email, password};
    return axios.post("/api/users", body).then(data => {
      console.log("new user data: "+data);
      return data;
    });
  }

  makeShelter: function(name, address, email, password) {
    var body = {name, address, email, password};
    return axios.post("/api/shelters", body).then(data => {
      console.log("new shelter data: "+data);
      return data;
    });
  }

  //route to validate user. If no email is found in the database
  //this will return data.username === true. At this point we want to alert the user the login email was incorrect.
  //if an email is found we will get a true or false from data.password. we will get true if the password matches the encrypted one.
  validateUser: function(email, password) {
    var body = {email, password};
    return axios.post("/api/user/login", body).then(data => {
      console.log("validation data: "+ data);
      return data;
    });
  }

  //route to create new pawfile
  makePawfile: function(name, species, breed, sex, age) {
    var body = {name, species, breed, sex, age};
    return axios.post("/api/pawfile", body).then(data => {
      console.log("new pawfile data: "+data);
      return data;
    });
  }

  //route to find all user's pawfiles
  findUserPawfiles: function(userId) {
    return axios.get("/api/pawfiles/"+userId).then(data => {
      console.log("Users pawfile data: "+data);
      return data;
    });
  }

  //route used to login to user pawfile
  findOnePawfile: function(id) {
    return axios.get("/api/pawfiled/"+id).then(data => {
      console.log("Single pawfile data: "+data);
      return data;
    });
  }

  //route for setting a pawfile Cookie.
  setCookie: function(id) {
    return axios.get("/api/setCookie/"+id).then(data => {
      return data;
    });
  }

  //route for feed.
  getFeed: function() {
    return axios.get("/api/feed").then(data => {
      console.log("Feed Data: "+data);
      return data;
    });
  }
  //retrieves all posts for one pawfile
  getPawfileFeed: function(pawfileId) {
    return axios.get("/api/userFeed/"+pawfileId).then(data => {
      console.log("pawfile feed data: "+ data);
      return data;
    });
  }
  //retrieves comments for a post
  getComments: function(postId) {
    return axios.get("/api/getComments/"+postId).then(data => {
      console.log("comment data: "+data);
      return data;
    });
  }

  //route to add picture
  addPic: function(imageFile) {
    return axios.post("/api/uploadImg", imageFile).then(data => {
      console.log("picture data: "+data);
      return data;
    });
  }

  //route to create text post
  addPost: function(post) {
    var body = {post};
    return axios.post("/api/sendTextPost", body).then(data => {
      console.log("text post data: "+data);
      return data;
    });
  }
}


export default helper;
