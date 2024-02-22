
const headerElement = document.querySelector(".header");
headerElement.style.backgroundColor = "gray";
headerElement.style.color = "pink";
headerElement.style.padding = "8px";
headerElement.style.textAlign = "center";

/**********************************************************/

const titleElement = document.getElementById("title");
titleElement.textContent = "Javascript Dom Assigment 1"

/**********************************************************/

const navitemElement = document.querySelector(".nav-item");
navitemElement.style.display = "flex";
navitemElement.style.justifyContent = "center";
navitemElement.style.gap = "15px";
navitemElement.style.listStyle = "none";

/**********************************************************/

const usernameInput = document.querySelector("#username");
usernameInput.value = "Gulsah";
usernameInput.disabled = "true";
const passwordInput = document.querySelector("#password");
passwordInput.value = "112013";
passwordInput.disabled = "true";
passwordInput.type = "text";

/**********************************************************/

const btnElement = document.querySelector(".btn");
btnElement.style.backgroundColor = "gray";
btnElement.style.color = "pink";
btnElement.style.padding = "10px";
btnElement.style.borderRadius = "20px";
btnElement.textContent = "Giriş Yap";
btnElement.style.cursor = "pointer";
btnElement.style.border = "none";

/**********************************************************/

const h3Element = document.getElementById("projects");
h3Element.textContent = "Js Dom Projects";

/**********************************************************/


document.addEventListener("DOMContentLoaded", function() {
    const myProjects = ["Hello World!", "Guess Number", "Checkout Page", "Gelir-Gider Projesi", "Api Projects"];
    
    const JsDomProjects = document.querySelector("#Js Dom Projects ul");

    myProjects.forEach(function(project) {
        const li = document.createElement("li");
        li.textContent = project;
        JsDomProjectsUl.appendChild(li);
    });
});