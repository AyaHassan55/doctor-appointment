import axios from 'axios';

const axiosGlobal = axios.create({
  baseURL: 'http://localhost:1337/api', 
  
  })
  const getCategory =()=>axiosGlobal.get('/categories?populate=*');

const Api = {
  getCategory,
};

export default Api;