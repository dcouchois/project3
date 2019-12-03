import axios from "axios";

export default {
  // Gets all beats
  getBeats: function() {
    return axios.get("/api/beats").then(({data}) => data);
  },
  // Creates a beat in the database
  createBeats: function(beatData) {
    return axios.post("/api/beats", beatData).then(({data}) => data);
  },
  saveBeats: function() {
    return axios.post("/api/beats").then(({data}) => data);
  },

}; 