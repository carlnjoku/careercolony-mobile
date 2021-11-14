import axios from 'axios';

export default axios.create({
  baseURL:'http://0.0.0.0:5003',
  headers: {
    'Content-type': 'application/json',
  }
})