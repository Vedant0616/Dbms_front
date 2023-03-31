import axios from "axios";
export default axios.create({
  baseURL: "https://dbms-back-n6l80i9vs-vedant0616.vercel.app",
  headers: {
    "Content-type": "application/json"
  }
});
