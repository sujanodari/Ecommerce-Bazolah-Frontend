import axois from "axios";
const instance = axois.create({
  baseURL: "https://bazolah.com/api/v1",
});

export default instance;
