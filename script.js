// DARK MODE TOGGLE
const toggle = document.getElementById("darkToggle");
document.getElementById("darkToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
;

// CAREER MATCHING
document.getElementById("career-form").addEventListener("submit", function(e) {
  e.preventDefault();

  const interest = document.getElementById("interest").value;
  const skill = document.getElementById("skill").value;
  const env = document.getElementById("environment").value;
  const problemSolving = document.getElementById("problemSolving").value;
  const motivation = document.getElementById("motivation").value;

  let result = "Please complete all fields.";

  if (
    interest === "tech" && skill === "logic" && problemSolving === "data"
  ) {
    result = "Suggested Career: Software Developer, Data Scientist, or AI Engineer.";
  } else if (
    interest === "creative" && skill === "design" && problemSolving === "visual"
  ) {
    result = "Suggested Career: Graphic Designer, UI/UX Designer, or Animator.";
  } else if (
    interest === "business" && skill === "communication" && env === "office"
  ) {
    result = "Suggested Career: Marketing Manager, Business Analyst, or HR Specialist.";
  } else if (
    interest === "health" && skill === "empathy" && motivation === "impact"
  ) {
    result = "Suggested Career: Doctor, Nurse, or Therapist.";
  } else if (
    interest === "education" && skill === "teaching" && env === "school"
  ) {
    result = "Suggested Career: Teacher, Professor, or Academic Counselor.";
  } else if (
    interest === "tech" && skill === "design" && env === "remote"
  ) {
    result = "Suggested Career: Frontend Developer, Web Designer, or App UI Developer.";
  } else {
    result = "Suggested Career: Explore roles in your area of interest like Data Analyst, Content Creator, Entrepreneur, or Medical Assistant.";
  }

  document.getElementById("result").textContent = result;
});
document.getElementById("career-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const interest = document.getElementById("interest").value;
  const skill = document.getElementById("skill").value;
  const env = document.getElementById("environment").value;
  const problemSolving = document.getElementById("problemSolving").value;
  const motivation = document.getElementById("motivation").value;

  const resultBox = document.getElementById("result");
  let resultHTML = "";

  if (
    interest === "tech" && skill === "logic" && problemSolving === "data"
  ) {
    resultHTML = `
      <strong>Suggested Career:</strong> Software Developer or Data Analyst<br><br>
      <a class="link-btn" href="https://www.linkedin.com/jobs/software-developer-jobs" target="_blank">🔍 Find Jobs on LinkedIn</a>
      <a class="link-btn" href="https://www.coursera.org/professional-certificates/google-it-support" target="_blank">🎓 Take Google IT Course</a>
    `;
  } else if (
    interest === "creative" && skill === "design" && problemSolving === "visual"
  ) {
    resultHTML = `
      <strong>Suggested Career:</strong> UI/UX Designer or Graphic Artist<br><br>
      <a class="link-btn" href="https://www.behance.net/joblist" target="_blank">🔍 Find Design Jobs on Behance</a>
      <a class="link-btn" href="https://www.coursera.org/specializations/ui-ux-design" target="_blank">🎓 UI/UX Course on Coursera</a>
    `;
  } else if (
    interest === "health" && skill === "empathy" && motivation === "impact"
  ) {
    resultHTML = `
      <strong>Suggested Career:</strong> Nurse or Healthcare Assistant<br><br>
      <a class="link-btn" href="https://www.indeed.com/q-healthcare-jobs.html" target="_blank">🔍 Search Jobs on Indeed</a>
      <a class="link-btn" href="https://www.aiims.edu/en.html" target="_blank">🎓 AIIMS Nursing Admission</a>
    `;
  } else if (
    interest === "education" && skill === "teaching" && env === "school"
  ) {
    resultHTML = `
      <strong>Suggested Career:</strong> School Teacher or Academic Counselor<br><br>
      <a class="link-btn" href="https://www.ctet.nic.in/" target="_blank">📝 CTET Exam Info</a>
      <a class="link-btn" href="https://www.linkedin.com/jobs/teacher-jobs/" target="_blank">🔍 Teaching Jobs on LinkedIn</a>
    `;
  } else {
    resultHTML = `
      <strong>Suggested Career:</strong> Explore creative fields like Content Creation, Digital Marketing, or Freelancing.<br><br>
      <a class="link-btn" href="https://www.upwork.com/" target="_blank">💼 Find Freelance Work</a>
      <a class="link-btn" href="https://grow.google/intl/en_in/certificates/" target="_blank">🎓 Learn with Google Career Certificates</a>
    `;
  }

  resultBox.innerHTML = resultHTML;
});

