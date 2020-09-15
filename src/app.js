import "./style/index.scss";
import axios from "axios";

// parse data
async function getUserBasicInformation(id) {
  const response = await axios.get(`http://localhost:8080/users/${id}`);
  return response.data;
}

async function displayFrontEndUserBasicInformation(id) {
  const data = await getUserBasicInformation(id);
  // $("#user-avatar").attr("src", data.avatar);
  document.getElementById("user-avatar").src = data.avatar;
  document.getElementById("user-name").innerHTML = data.name;
  document.getElementById("user-age").innerHTML = data.age;
}

const url = window.location.href;
const id = url.split("users/")[1];
displayFrontEndUserBasicInformation(id);
export { getUserBasicInformation };
