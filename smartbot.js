window.onload = () => {
  const chatWindow = document.getElementById("chat-window");
  const userInput = document.getElementById("userInput");
  const sendBtn = document.getElementById("sendBtn");
  const resetBtn = document.getElementById("resetBtn");

  let answers = {};
  let step = 0;

  const questions = [
    "Hi! What is your highest education level? (e.g., 10th pass, 12th pass, graduate)",
    "What is your area of interest? (e.g., technology, health, creative, education, business)",
    "Nice! What skill describes you best? (e.g., logic, empathy, design, teaching, communication)",
    "Cool! What kind of work environment do you prefer? (e.g., office, lab, school, remote)",
    "How do you prefer solving problems? (e.g., data, visual, hands-on, step-by-step)",
    "Finally, what motivates you most? (e.g., money, freedom, helping, stability, learning)"
  ];

  const keys = ["education", "interest", "skill", "environment", "problem", "motivation"];

  function showMessage(sender, message) {
    const div = document.createElement("div");
    div.className = `chat-message ${sender === "Bot" ? "bot-message" : "user-message"}`;
    div.innerHTML = `<strong>${sender}:</strong><br>${message}`;
    chatWindow.appendChild(div);
    chatWindow.scrollTop = chatWindow.scrollHeight;
  }

  function showTyping() {
    const typing = document.createElement("div");
    typing.className = "typing";
    typing.id = "typing";
    typing.textContent = "Bot is typing...";
    chatWindow.appendChild(typing);
    chatWindow.scrollTop = chatWindow.scrollHeight;
  }

  function hideTyping() {
    const typing = document.getElementById("typing");
    if (typing) chatWindow.removeChild(typing);
  }

  function getCareerSuggestion(ans) {
    const { education, interest, skill } = ans;

    if (education.includes("10th")) {
      return `🎓 You're 10th pass. Explore:
- ITI Trades (Electrician, Fitter)
- BPO & delivery jobs
- Govt jobs like SSC MTS, Railways
<br>👉 <a href="https://www.nios.ac.in/" target="_blank">Get 12th via NIOS</a>`;
    }

    if (education.includes("12th")) {
      if (interest.includes("tech")) {
        return `💻 Tech Career after 12th:
- Learn Web Dev, Python
- Try internships or junior dev roles
👉 <a href="https://www.freecodecamp.org/" target="_blank">Start Free Coding</a>`;
      }
      if (interest.includes("creative")) {
        return `🎨 Creative Career:
- Graphic Design, Video Editing
- Learn Figma, Canva, Photoshop`;
      }
      return `📘 Career after 12th:
- Govt: SSC CHSL, NDA, Police
- Private: BPO, Front Desk
- Courses: Hospitality, Marketing`;
    }

    if (education.includes("graduate")) {
      if (interest.includes("tech") && skill.includes("logic")) {
        return `🧠 Become a Software Developer or Analyst
🛠 Learn: JavaScript, Python, SQL
👉 <a href="https://www.coursera.org/" target="_blank">Explore Coursera</a>`;
      }
      if (interest.includes("creative") && skill.includes("design")) {
        return `🎨 UI/UX Designer or Animator
Tools: Figma, Adobe, Blender`;
      }
      if (interest.includes("education") && skill.includes("teaching")) {
        return `📘 Teaching Jobs:
- Do B.Ed
- Apply for CTET / Private Tutor`;
      }
      return `🎯 As a Graduate:
- Explore Digital Marketing, Sales, Analyst roles
- Add 1 skill (coding/design) for more options`;
    }

    return `🤔 I couldn't identify your path clearly.
Try freelancing, content creation, or digital marketing.`;
  }

  function processUserInput() {
    const input = userInput.value.trim();
    if (!input) return;

    showMessage("You", input);
    userInput.value = "";

    if (step < keys.length) {
      answers[keys[step]] = input.toLowerCase();
      step++;
    }

    if (step < questions.length) {
      showTyping();
      setTimeout(() => {
        hideTyping();
        showMessage("Bot", questions[step]);
      }, 800);
    } else {
      showTyping();
      setTimeout(() => {
        hideTyping();
        const result = getCareerSuggestion(answers);
        showMessage("Bot", result);
      }, 1000);
    }
  }

  function resetChat() {
    chatWindow.innerHTML = "";
    userInput.value = "";
    step = 0;
    answers = {};
    showMessage("Bot", questions[0]);
  }

  // Start bot with first question
  showMessage("Bot", questions[0]);

  sendBtn.addEventListener("click", processUserInput);
  resetBtn.addEventListener("click", resetChat);

  userInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") processUserInput();
  });
};
