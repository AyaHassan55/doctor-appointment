import axios from 'axios';

const axiosGlobal = axios.create({
  baseURL: 'http://localhost:1337/api', 
  
  })
  const getCategory =()=>axiosGlobal.get('/categories?populate=*');
  const getDoctors =()=>axiosGlobal.get('/doctors?populate=*');
  const getDoctorsByCategory =(category)=>axiosGlobal
         .get('/doctors?populate=*&filters[Category][name][$contains]='+category);

//  const getDoctorByID =(documentId)=>axiosGlobal.get(`/doctors/${documentId}?populate=*`);        
 const getDoctorByID =(documentId)=>axiosGlobal.get('/doctors/'+documentId+'?populate=*');
 const bookAppointment =(data)=>axiosGlobal.post('/appointments',data);
 const myBookingList =(email)=>axiosGlobal.get('/appointments?filters[email][$eq]='+email+'&populate[doctor][populate]=image');

export default  {
  getCategory,
  getDoctors,
  getDoctorsByCategory,
  getDoctorByID,
  bookAppointment,
  myBookingList
};

