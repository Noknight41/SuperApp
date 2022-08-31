import axios from "axios";

const Axios = axios.create({
  baseURL: "https://api.adviceslip.com/",
  headers: {
    Accept: "application/json,application/x-www-form-urlencoded,text/plain,*/*",
    "Content-Type": "application/json;charset=utf-8",
  },
});

const AdviceAPI = {
  getAdvice: () => Axios.get(`advice?cb=${Date.now()}`, {}),
};

export default AdviceAPI;
