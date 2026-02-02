import axios from 'axios';

const axiosGlobal = axios.create({
  baseURL: 'http://localhost:1337/api', 
  
  })
  const getCategory =(locale = 'en')=>axiosGlobal.get(`/categories?populate=*&locale=${locale}`);
  const getDoctors =()=>axiosGlobal.get('/doctors?populate=*');
  const getDoctorsByCategory =(category)=>axiosGlobal
         .get('/doctors?populate=*&filters[Category][name][$contains]='+category);

//  const getDoctorByID =(documentId)=>axiosGlobal.get(`/doctors/${documentId}?populate=*`);        
 const getDoctorByID =(documentId)=>axiosGlobal.get('/doctors/'+documentId+'?populate=*');
 const bookAppointment =(data)=>axiosGlobal.post('/appointments',data);
 const myBookingList =(email)=>axiosGlobal.get('/appointments?filters[email][$eq]='+email+'&populate[doctor][populate]=image');
const deleteBooking =(documentId)=>axiosGlobal.delete('/appointments/'+documentId)
export default  {
  getCategory,
  getDoctors,
  getDoctorsByCategory,
  getDoctorByID,
  bookAppointment,
  myBookingList,
  deleteBooking
};

