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
  // aboutme
  document.getElementById("description").innerHTML = data.description;
}

async function getUserEducationInformation(id) {
  const response = await axios.get(
    `http://localhost:8080/users/${id}/educations`
  );
  return response.data;
}

async function displayFrontEndUserEducationInformation(id) {
  const data = await getUserEducationInformation(id);
  let educationHtmlContent = "";
  let educationListHtmlContent = "";
  for (let i = 0; i < data.length; i += 1) {
    educationHtmlContent = `<li>
                                  <p>${data[i].year}</p>
                                  <section>
                                    <p>${data[i].title}</p>
                                    <p>${data[i].description}</p>
                                  </section>
                              </li>`;
    educationListHtmlContent += educationHtmlContent;
  }
  document.getElementById(
    "education-list"
  ).innerHTML = educationListHtmlContent;
}

const url = window.location.href;
const id = url.split("users/")[1];
displayFrontEndUserBasicInformation(id);
displayFrontEndUserEducationInformation(id);
export { getUserBasicInformation, getUserEducationInformation };
