import axios from "axios";

 const axiosInstance = axios.create({
  // LOcal instance of firebase function
   //  baseURL: "http://127.0.0.1:5001/clone-375ad/us-central1/api", });
  //  Deployed version of firebase function
   baseURL: "https://api-zwht5abbea-uc.a.run.app",
  //  deployed version of amazon server on render.com
  //  baseURL: "https://amazon-api-deploy-8fd4.onrender.com/",
 });
  export { axiosInstance };