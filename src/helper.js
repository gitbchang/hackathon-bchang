import axios from 'axios';

const helper = {
  getData:()=>{
    return axios.get('http://localhost:8080/data').then(function (response) {
        return response;
      }).catch(function (error) {
        console.log(error);
      });
  }
}

export default helper;
