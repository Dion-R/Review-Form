//populate questions
const form1 = document.getElementById("form1");

const loadContent = () => {
  const form1Content = totalFinanceQuestions
    .map((questions, index) => {
      const index1 = (index + 1) * 2 - 1;
      const index2 = (index + 1) * 2;
      const id = index + 1;
      return `<div class="border rounded p2 shadow question">
              <p class="text-center mb-2 height" id="fq${id}">
                ${questions.question}
              </p>
              <div class="line"></div>
              <div class="d-flex align-center justify-center g-1 mt-2">
                <input type="button"  value="${questions.value[0]}" class="rounded button" id="check${index1}"/>
                <input type="button" value="${questions.value[1]}" class="rounded button" id="check${index2}"/>
              </div>
              <p class='alert${index1} mt-1 none' style="font-size: 1rem; color: var(--jb-red);"> Please select from one of the above</p>
              <p class='followUpQuestion none mt-2'>${questions.followUp}</p>
              <textarea name="" class="p1 rounded shadow mt-2 none followUpText"></textarea>
            </div>`;
    })
    .join("");
  form1.innerHTML = form1Content;
};

loadContent();
const form2 = document.getElementById("form2");
const form2Content = totalCircumstanceQuestions
  .map((questions, index) => {
    const index1 = (index + totalFinanceQuestions.length) * 2 + 1;
    const index2 = (index + totalFinanceQuestions.length) * 2 + 2;
    const id = index + 1;
    return `<div class="border rounded p2 shadow question">
              <p class="text-center mb-2 height" id="cq${id}">
                ${questions.question}
              </p>
              <div class="line"></div>
              <div class="d-flex align-center justify-center g-1 mt-2">
                <input type="button"  value="${questions.value[0]}" class="rounded button" id="check${index1}"/>
                <input type="button" value="${questions.value[1]}" class="rounded button" id="check${index2}"/>
              </div>
              <p class='alert${index1} mt-1 none' style="font-size: 1rem; color: var(--jb-red);"> Please select from one of the above</p>
              <p class='followUpQuestion none mt-2'>${questions.followUp}</p>
              <textarea name="" class="p1 rounded shadow mt-2 none followUpText"></textarea>
            </div>`;
  })
  .join("");
form2.innerHTML = form2Content;

//   first name generator
const firstName = document.querySelector(".name");
firstName.innerText = `Hi ${person.name}, We hope you’re doing well. One of your creditors has asked for a review of the reduced payment plan that we’ve negotiated on your behalf. Before we go back to them, we need to check if your circumstances have changed at all since you’ve been on Just Budget’s reduced payment plan.`;

// buttons
const buttons = document.querySelectorAll(".button");

let questionArray = [];

buttons.forEach(function (btn) {
  btn.addEventListener("click", (e) => {
    // create a pair of buttons
    const id = parseInt(e.target.id.replace("check", ""));
    let oddOrEven;
    if (id % 2 === 0) {
      oddOrEven = "even";
    } else {
      oddOrEven = "odd";
    }
    let values = [];
    if (oddOrEven === "even") {
      values.push(id - 1, id);
    } else {
      values.push(id, id + 1);
    }

    // toggle on and off
    if (!document.getElementById(`check${id}`).classList.contains("buttonOn")) {
      values.forEach(function (value) {
        document.getElementById(`check${value}`).classList.remove("buttonOn");
      });
      document.getElementById(`check${id}`).classList.add("buttonOn");
    } else {
      document.getElementById(`check${id}`).classList.remove("buttonOn");
    }

    // allert
    values.forEach(function (value) {
      if (
        document.getElementById(`check${value}`).classList.contains("buttonOn")
      ) {
        document.querySelector(`.alert${values[0]}`).classList.add("none");
      }
    });

    // text Area for the follow Up
    function followUp() {
      //
      const yesBtn = document.getElementById(`check${values[0]}`);
      const followUpParent = yesBtn.parentElement.parentElement;
      const followUpText = followUpParent.querySelector(".followUpText");
      const followUpQuestion =
        followUpParent.querySelector(".followUpQuestion");
      if (
        yesBtn.classList.contains("buttonOn") &&
        followUpQuestion.textContent !== ""
      ) {
        followUpText.value = "";
        followUpText.classList.remove("none");
        followUpQuestion.classList.remove("none");
        console.log("follow up");
      } else {
        followUpQuestion.classList.add("none");
        followUpText.classList.add("none");
      }
    }
    followUp();

    function generateText() {
      // find the question text
      let array = [];
      const question =
        e.target.parentElement.parentElement.firstChild.nextSibling.innerText;
      array.push(question);

      // find the reply value
      const reply = e.target.value;

      // find the required object using the question text
      const questionObject = totalQuestions.find(
        (questions) => questions.question === question
      );

      // declaring paragraph strings
      if (e.target.classList.contains("buttonOn")) {
        // checking if the question previously exists in the array e.g. it couldbe been previously assigned into the array with a different value
        for (i = 0; i < questionArray.length; i++) {
          if (question === questionArray[i][0]) {
            questionArray.splice(i, 1);
          }
        }

        // adding the question to the array if the button is selected
        const questionStrings = questionObject.response[reply];
        const values = Object.values(questionStrings);
        const randomString = values[Math.floor(Math.random() * values.length)];
        array.push(randomString);
        questionArray.push(array);
      } else {
        // if the button isnt selected then we want to find the corresponding question in the array and remnove it
        for (i = 0; i < questionArray.length; i++) {
          if (question === questionArray[i][0]) {
            questionArray.splice(i, 1);
          }
        }
      }

      //  this takes the question array and breaks it down to include a single string associated with the question
      let paragraphStrings = questionArray.reduce((array, item) => {
        array.push(item[1]);
        return array;
      }, []);

      // this cleans the array so it doenst include any empty strings
      const cleanParagraphStrings = paragraphStrings.filter((string) => {
        return string !== "";
      });

      const textGenerator = document.querySelector(".generateTextHere");

      textGenerator.textContent = cleanParagraphStrings.join(". ");

    }
    generateText();
  });
});

// submit functionality
const submit = document.querySelector(".submit");
submit.addEventListener("click", () => {
  buttonCheck();
});

function buttonCheck() {
  const questionsLength = totalQuestions.length * 2;
  for (let i = 1; i < questionsLength; i += 2) {
    if (
      !document.getElementById(`check${i}`).classList.contains("buttonOn") &&
      !document.getElementById(`check${i + 1}`).classList.contains("buttonOn")
    ) {
      document.querySelector(`.alert${i}`).classList.remove("none");
    }
  }
  const paySlipsAlert = document.querySelector(".paySlipsAlert");
  const input = document.querySelector(".input");
  console.log(input.files);
  if (input.files.length === 0) {
    paySlipsAlert.classList.remove("none");
  }
}

// file input
const dropZone = document.querySelector(".dropZone");
const input = document.querySelector(".input");
const browse = document.querySelector(".browse");
const files = document.querySelector(".files");
const textContent = document.querySelector(".textContent");

// primary drop zone which is the entire box
function dropZoneClick() {
  input.click();
}
dropZone.addEventListener("click", dropZoneClick);

// allocating file if it is done via click
input.addEventListener("change", (e) => {
  if (e.currentTarget.files.length) {
    [...input.files].map((file) => {
      updateFiles(file);
    });
  }
});

// changing the border of the drop zone when the file is dragged over
dropZone.addEventListener("dragover", (e) => {
  e.preventDefault();
  dropZone.classList.remove("border2");
  dropZone.classList.add("border");
});

// reinstating the border when the file is dragged outside the drop zone
["dragleave", "dragend"].forEach((type) => {
  dropZone.addEventListener(type, (e) => {
    dropZone.classList.remove("border");
    dropZone.classList.add("border2");
  });
});

// if there is a drop, we will search the event object for a file, if it is present we will assign it to the files in the input
dropZone.addEventListener("drop", (e) => {
  e.preventDefault();
  if (e.dataTransfer.files.length) {
    input.files = e.dataTransfer.files;
  }
  [...input.files].map((file) => {
    updateFiles(file);
  });
  dropZone.classList.remove("border");
  dropZone.classList.add("border2");
});

// re allocating the drop zone, pushing the visual display of the file to the 'file' div and adding an event listener to the delete button.
let fileArray = [];
let fileName = [];
function updateFiles(file) {
  // initiate the files div which will hold the files
  files.classList.remove("none");

  //   add the file name to the array file name so that it can be attributed to the re-arranged files in the future.
  fileName.push(file.name);

  //   create HTML for the file to be attributed to the file Array
  const createFile = `<div class="file"><p>${file.name}</p><i class="fa-solid fa-xmark delete" id='id${fileArray.length}'></i></div>`;
  fileArray.push(createFile);
  let arrayString = fileArray.join("");
  files.innerHTML = arrayString;

  //   change the drop zone from the entire box to the div containign the instructions.
  dropZone.removeEventListener("click", dropZoneClick);
  textContent.addEventListener("click", dropZoneClick);

  const deleteBtn = document.querySelectorAll(".delete");
  deleteBtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      id = btn.id.replace("id", "");

      //   removeFileFromFileList(btn, id);
      removeFileFromArray(btn, id);
    });
  });
  const paySlipsAlert = document.querySelector(".paySlipsAlert");
  paySlipsAlert.classList.add("none");
}

// remove file functionality so that the file is removed from the input when click event object is fired on the delete class
function removeFileFromFileList(btn, id) {
  const dt = new DataTransfer();
  const { files } = input;
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    if (id !== i) {
      dt.items.add(file);
    }
  }
  input.files = dt.files;
}

function removeFileFromArray(btn, id) {
  // remove the file from the file list from the UI
  btn.parentElement.remove();
  //remove the file from file array and file name list
  fileName.splice(id, 1);
  fileArray.splice(id, 1);
  //   remove the div files if there are no files
  if (fileArray.length == 0) {
    files.classList.add("none");
  }
  //   re attributing the file id. for example, if there are three files, the second is removed then there are only two files with id1, id3. these dont match up to the files position in the array and therefore these numbers have to be re assigned.
  fileArrayLength = [];
  for (let i = fileArray.length - 1; i >= 0; i--) {
    fileArrayLength.unshift(i);
  }
  fileArray = fileArrayLength.map((id, index) => {
    const name = fileName[index];
    return `<div class="file"><p>${name}</p><i class="fa-solid fa-xmark delete" id='id${id}'></i></div>`;
  });
  fileArrayString = fileArray.join("");
  files.innerHTML = fileArrayString;

  //   add event listeners to the new re ordered files in the array
  const deleteBtn = document.querySelectorAll(".delete");
  deleteBtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      id = btn.id.replace("id", "");
      //   removeFileFromFileList(btn, id);
      removeFileFromArray(btn, id);
    });
  });
}

// box height adjustments for questions

const financeQuestionsLength = Math.floor(totalFinanceQuestions.length / 2);
const circumstanceQuestionsLength = Math.floor(
  totalCircumstanceQuestions.length / 2
);
const financeQuestionHeight = () => {
  for (let i = 1; i <= financeQuestionsLength; i++) {
    const index1 = i * 2 - 1;
    const index2 = i * 2;
    const questionOne = document.getElementById(`fq${index1}`);
    const questionTwo = document.getElementById(`fq${index2}`);
    let questionOneHeight = questionOne.clientHeight;
    let questionTwoHeight = questionTwo.clientHeight;
    if (questionOneHeight > questionTwoHeight) {
      questionTwo.style.height = `${questionOneHeight}px`;
    } else {
      questionOne.style.height = `${questionTwoHeight}px`;
    }
  }
};

const circumstanceQuestionHeight = () => {
  for (let i = 1; i <= circumstanceQuestionsLength; i++) {
    const index1 = i * 2 - 1;
    const index2 = i * 2;
    const questionOne = document.getElementById(`cq${index1}`);
    const questionTwo = document.getElementById(`cq${index2}`);
    let questionOneHeight = questionOne.clientHeight;
    let questionTwoHeight = questionTwo.clientHeight;
    if (questionOneHeight > questionTwoHeight) {
      questionTwo.style.height = `${questionOneHeight}px`;
    } else {
      questionOne.style.height = `${questionTwoHeight}px`;
    }
  }
};

const heightReset = () => {
  const height = document.querySelectorAll(".height");
  height.forEach((height) => {
    height.style.height = "auto";
  });
};

const mql1 = window.matchMedia("screen and (min-width: 1400px");
const mql2 = window.matchMedia(
  "screen and (min-width: 1200px) and (max-width: 1400px)"
);
const mql3 = window.matchMedia("screen and (max-width: 1200px");

screenCheck(mql1);
screenCheck(mql2);
smlScreenCheck(mql3);
[mql1, mql2].map((i) => {
  i.addEventListener("change", (e) => {
    screenCheck(e);
  });
});

function screenCheck(e) {
  if (e.matches) {
    heightReset();
    circumstanceQuestionHeight();
    financeQuestionHeight();
  }
}

mql3.addEventListener("change", (e) => {
  smlScreenCheck(e);
});

function smlScreenCheck(e) {
  if (e.matches) {
    heightReset();
  }
}
