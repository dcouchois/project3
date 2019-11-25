import axios from "axios";

export default {
  // Gets all candles
  getBeats: function() {
    return axios.get("/api/beats").then(({data}) => data);
  },
  // Creates a candle in the database
  createBeats: function(beatData) {
    return axios.post("/api/beats", beatData).then(({data}) => data);
  }
}; 