document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("darkToggle");

  // Check for dark mode toggle button
  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark");

      // Toggle icon
      if (document.body.classList.contains("dark")) {
        toggleBtn.textContent = "☀️";
      } else {
        toggleBtn.textContent = "🌙";
      }
    });
  }
});


  // CAREER MATCHING LOGIC
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
        <a class="link-btn" href="https://www.coursera.org/professional-certificates/google-it-support" target="_blank">🎓 Google IT Course</a>
      `;
    } else if (
      interest === "creative" && skill === "design" && problemSolving === "visual"
    ) {
      resultHTML = `
        <strong>Suggested Career:</strong> UI/UX Designer or Graphic Artist<br><br>
        <a class="link-btn" href="https://www.behance.net/joblist" target="_blank">🔍 Design Jobs on Behance</a>
        <a class="link-btn" href="https://www.coursera.org/specializations/ui-ux-design" target="_blank">🎓 UI/UX Course</a>
      `;
    } else if (
      interest === "business" && skill === "communication" && env === "office"
    ) {
      resultHTML = `
        <strong>Suggested Career:</strong> Marketing Manager or Business Analyst<br><br>
        <a class="link-btn" href="https://www.linkedin.com/jobs/marketing-manager-jobs" target="_blank">🔍 Jobs on LinkedIn</a>
        <a class="link-btn" href="https://www.coursera.org/specializations/wharton-business-foundations" target="_blank">🎓 Business Foundations Course</a>
      `;
    } else if (
      interest === "health" && skill === "empathy" && motivation === "impact"
    ) {
      resultHTML = `
        <strong>Suggested Career:</strong> Nurse or Healthcare Assistant<br><br>
        <a class="link-btn" href="https://www.indeed.com/q-healthcare-jobs.html" target="_blank">🔍 Healthcare Jobs</a>
        <a class="link-btn" href="https://www.aiims.edu/en.html" target="_blank">🎓 AIIMS Admission</a>
      `;
    } else if (
      interest === "education" && skill === "teaching" && env === "school"
    ) {
      resultHTML = `
        <strong>Suggested Career:</strong> School Teacher or Academic Counselor<br><br>
        <a class="link-btn" href="https://www.ctet.nic.in/" target="_blank">📝 CTET Exam Info</a>
        <a class="link-btn" href="https://www.linkedin.com/jobs/teacher-jobs/" target="_blank">🔍 Teaching Jobs</a>
      `;
    } else if (
      interest === "tech" && skill === "design" && env === "remote"
    ) {
      resultHTML = `
        <strong>Suggested Career:</strong> Frontend Developer or App UI Designer<br><br>
        <a class="link-btn" href="https://www.linkedin.com/jobs/frontend-developer-jobs" target="_blank">🔍 Jobs on LinkedIn</a>
        <a class="link-btn" href="https://www.codecademy.com/learn/learn-react" target="_blank">🎓 Learn React</a>
      `;
    } else {
      resultHTML = `
        <strong>Suggested Career:</strong> Explore creative or freelance paths like Digital Marketing, Content Creation, or Self-Employment.<br><br>
        <a class="link-btn" href="https://www.upwork.com/" target="_blank">💼 Freelance on Upwork</a>
        <a class="link-btn" href="https://grow.google/intl/en_in/certificates/" target="_blank">🎓 Google Career Certificates</a>
      `;
    }

    resultBox.innerHTML = resultHTML;
  });
});
