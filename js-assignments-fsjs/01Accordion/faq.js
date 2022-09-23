const faqData = [
  {
    id: 1,
    question: "Who are we?",
    answer:
      "We enable upscaling careers through flexible, interactive and collaborative learning. We believe in building learning communities by bringing together mentors, young minds, and creators.",
  },
  {
    id: 2,
    question: "What do we do?",
    answer:
      "Building learning communities with Our Affordable & Competent Courses",
  },
  {
    id: 3,
    question: "Are the community classes boring?",
    answer: "No, not at all!!!",
  },
];

const accordianBody = document.querySelector(".accordian_body");
const faqs = [];

function showFaq(i) {
  let faqListElements = document.querySelectorAll("p");
  if (faqListElements[i].style.display == "block") {
    faqListElements[i].style.display = "none";
  } else {
    faqListElements[i].style.display = "block";
  }
}

function createFaq(ques, ans) {
  faqData.push({
    id: faqData.length,
    question: ques,
    answer: ans,
  });
}
createFaq("hola", "amigo");

function btnStatusUpdate(i) {
  let faqListElements = document.querySelectorAll("p");

  if (faqListElements[i].style.display == "block") {
    document.querySelectorAll("button")[i].style.backgroundColor = "white";
  } else {
    document.querySelectorAll("button")[i].style.backgroundColor = "black";
  }
}

function listRendrer() {
  faqData.forEach((e, i) => {
    var parent = document.createElement("div");
    parent.classList.add("faq");
    accordianBody.appendChild(parent);
    var ques = document.createElement("h3");
    var icon = document.createElement("button");
    icon.textContent = "";
    icon.classList.add("show_btn");
    var ans = document.createElement("p");
    ques.textContent = e.question;
    ans.textContent = e.answer;
    parent.appendChild(ques);
    parent.appendChild(ans);
    ques.appendChild(icon);
    icon.style.cssText = "float:right";
    ans.classList.add("hidden");

    icon.addEventListener("click", () => {
      showFaq(i);
      btnStatusUpdate(i);
    });
  });
}
listRendrer();
