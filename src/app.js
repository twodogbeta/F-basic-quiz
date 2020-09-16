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
  // TODO feedback: description和以上的基本信息属于不同的内容结构，不建议放在一个方法
  document.getElementById("description").innerHTML = data.description;
}

// TODO feedback: 建议请求抽到单独的service
async function getUserEducationInformation(id) {
  const response = await axios.get(
    `http://localhost:3000/users/${id}/educations`
  );
  return response.data;
}

async function displayFrontEndUserEducationInformation(id) {
  const data = await getUserEducationInformation(id);
  // TODO feedback: 既然是for loop内部使用的局部变量，就不要在外层定义
  let educationHtmlContent = "";
  let educationListHtmlContent = "";
  // TODO feedback: ES6 forEach
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
// TODO feedback: 既然已经是前端工程，就不需要在命名中体现Frontend
displayFrontEndUserBasicInformation(id);
displayFrontEndUserEducationInformation(id);
export { getUserBasicInformation, getUserEducationInformation };
