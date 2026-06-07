
// LIVE UPDATE FUNCTION
document.addEventListener("input", updateResume);

function updateResume() {

  // NAME
  document.getElementById("r-name").innerText =
    document.getElementById("name").value || "Your Name";

  // CONTACT
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;

  document.getElementById("r-contact").innerText =
    (email || "") + " | " + (phone || "");

  // SUMMARY
  document.getElementById("r-summary").innerText =
    document.getElementById("summary").value || "";

  // EDUCATION
  let eduInputs = document.querySelectorAll(".education");
  let eduList = document.getElementById("r-education");

  eduList.innerHTML = "";
  eduInputs.forEach(input => {
    if (input.value.trim() !== "") {
      let li = document.createElement("li");
      li.innerText = input.value;
      eduList.appendChild(li);
    }
  });

  // EXPERIENCE
  let expInputs = document.querySelectorAll(".experience");
  let expList = document.getElementById("r-experience");

  expList.innerHTML = "";
  expInputs.forEach(input => {
    if (input.value.trim() !== "") {
      let li = document.createElement("li");
      li.innerText = input.value;
      expList.appendChild(li);
    }
  });

  // SKILLS (comma separated → tags)
  let skills = document.getElementById("skills").value;
  let skillBox = document.getElementById("r-skills");

  skillBox.innerHTML = "";

  if (skills.trim() !== "") {
    skills.split(",").forEach(skill => {
      let span = document.createElement("span");
      span.innerText = skill.trim();
      skillBox.appendChild(span);
    });
  }
}

// ADD EDUCATION FIELD
function addEducation() {
  let input = document.createElement("input");
  input.type = "text";
  input.className = "education";
  input.placeholder = "Education Details";
  document.getElementById("educationContainer").appendChild(input);
}

// ADD EXPERIENCE FIELD
function addExperience() {
  let input = document.createElement("input");
  input.type = "text";
  input.className = "experience";
  input.placeholder = "Experience Details";
  document.getElementById("experienceContainer").appendChild(input);
}

// CLEAR FORM
function clearForm() {
  document.querySelectorAll("input, textarea").forEach(el => el.value = "");
  updateResume();
}