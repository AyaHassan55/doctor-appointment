import axios from 'axios';

const axiosGlobal = axios.create({
  baseURL: 'http://localhost:1337/api', 
  
  })
  const getCategory =()=>axiosGlobal.get('/categories?populate=*');
  const getDoctors =()=>axiosGlobal.get('/doctors?populate=*');

export default  {
  getCategory,
  getDoctors,
};

