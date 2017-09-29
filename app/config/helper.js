import axios from "axios";

const helper = {

  //route to create user
  makeUser: function(newUser) {
    var body = newUser;
    return axios.post("/api/users", body).then(data => {
      console.log("new user data: "+data);
      return data;
    });
  },

  makeShelter: function(newShelter) {
    var body = newShelter;
    return axios.post("/api/shelters", body).then(data => {
      console.log("new shelter data: "+data);
      return data;
    });
  },

  getUser: function() {
    return axios.get("/api/user/").then(data => {
        //console.log("User data: "+ data);
        return data;
    });
},

getShelter: function() {
    return axios.get("/api/shelters/").then(data => {
        console.log("Shelter data: "+data);
        return data;
    });
},
  //route to validate user. If no email is found in the database
  //this will return data.username === true. At this point we want to alert the user the login email was incorrect.
  //if an email is found we will get a true or false from data.password. we will get true if the password matches the encrypted one.
  validateUser: function(email, password) {
    var body = {email, password};
    console.log(body);
    return axios.post("/api/user/login", body).then(data => {
      console.log("validation data: "+ data.data);
      return data;
    });
  },

  //route to create new pawfile
  makePawfile: function(newPawfile) {
    console.log(newPawfile);
    return axios.post("/api/pawfile", newPawfile).then(data => {
      console.log("new pawfile data: "+data);
      return data;
    });
  },

  //route to find a single user's pawfiles
  findUserPawfiles: function() {
    return axios.get("/api/user/pawfiles/").then(data => {
      return data;
    });
  },

  //route used to login to user pawfile
  findOnePawfile: function(id) {
    return axios.get("/api/pawfiles/"+id).then(data => {
      console.log("Single pawfile data: "+data);
      return data;
    });
  },

  //route for setting a pawfile Cookie.
  setCookie: function(id) {
    return axios.get("/api/setCookie/"+id).then(data => {
      return data;
    });
  },

  //route for feed.
  getFeed: function() {
    return axios.get("/api/feed").then(data => {
      console.log("Feed Data: "+data);
      return data;
    });
  },
  //retrieves all posts for one pawfile
  getPawfileFeed: function(pawfileId) {
    return axios.get("/api/userFeed/"+pawfileId).then(data => {
      console.log("pawfile feed data: "+ data);
      return data;
    });
  },
  //retrieves comments for a post
  getComments: function(postId) {
    return axios.get("/api/getComments/"+postId).then(data => {
      console.log("comment data: "+data);
      return data;
    });
  },

  //route to add picture
  addPic: function(imageFile) {
    return axios.post("/api/uploadImg", imageFile, {headers: {
      'Content-Type': imageFile.type
    }}).then(data => {
      console.log("picture data: "+data.data);
      return data;
    });
  },

  addPicWithPost: function(id, imageFile) {
    return axios.post("/api/picAndText/"+id, imageFile, {headers: {
      'Content-Type': imageFile.type
    }}).then(data => {
      console.log("picture data:"+data.data);
      return data;
    });
  },

  addProfPic: function(id, imageFile) {
    return axios.post("/api/profPic/"+id, imageFile, {
      headers: {
        'Content-Type': imageFile.type
      }
    }).then(data => {
      return data;
    });
  },

  //route to create text post
  addPost: function(post) {
    return axios.post("/api/sendTextPost", {post: post}).then(data => {
      console.log("text post data: "+data);
      return data;
    });
  }
}


export default helper;
