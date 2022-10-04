// dq = finance question
const financeQuestions = [
  {
    question:
      "Has your financial and mental situation improved since being on the payment arrangement?",
    value: ["Yes", "No"],
    followUp: "",
    response: {
     Yes: {
        string1:
          "My financial and mental health has improved since being on a payment arrangement with my creditors",
        string2:
          "Since I commenced my payment arrangement, my financial and mental health has improved",
        string3:
          "The payment arrangement that I currently have in place with my creditors has helped to improve my financial and mental health",
        string4:
          "Both my financial and mental wellbeing has improved since my payment arrangement begun",
        string5:
          "Ever since I began my payment arrangement with my creditors, both my financial and mental wellbeing has improved",
        string6:
          "My current payment arrangement, that is in place with my creditors has helped improve my financial and mental wellbeing",
      },
      No: {
        string1: "",
        string2: "",
        string3: "",
        string4: "",
        string5: "",
        string6: "",
        string7: "",
        string8: "",
      },
    },
  },
  {
    question:
      "Do you feel less financially vulnerable on the payment arrangement?",
    value: ["Yes", "No"],
    followUp: "",
    response: {
     Yes: {
        string1:
          "I feel significantly less vulnerable under my current payment arrangement",
        string2:
          "the payment arrangement has made me feel more secure with my finances",
        string3:
          "I’ve been able to handle my finances due to the security provided by my current payment arrangement",
        string4:
          "I feel less vulnerable, as I’m now able to handle my repayments under their newterms",
        string5:
          "the payment arrangement has provided me with the confidence to feel less vulnerable",
        string6:
          "I’m dedicated to paying my creditors now that I feel less vulnerable",
      },
      No: {
        string1: "",
        string2: "",
        string3: "",
        string4: "",
        string5: "",
        string6: "",
        string7: "",
        string8: "",
      },
    },
  },
  {
    question: "Would you like to increase your payments on your arrangement?",
    value: ["Yes", "No"],
    followUp: "",
    response: {
     Yes: {
        string1: "",
        string2: "",
        string3: "",
        string4: "",
      },
      No: {
        string1: "",
        string2: "",
        string3: "",
        string4: "",
      },
    },
  },
  {
    question: "Has your income decreased?",
    value: ["Yes", "No"],
    followUp: "",
    response: {
     Yes: {
        string1: "I have experienced a decrease in my income",
        string2: "Unfortunately, my income has decreased",
        string3: "The amount of income I receive has decreased",
        string4: "In recent months, my income has declined",
        string5: "my income has diminished in recent months",
        string6: "I currently have a lower income",
      },
      No: {
        string1: "",
        string2: "",
        string3: "",
        string4: "",
        string5: "",
        string6: "",
        string7: "",
        string8: "",
      },
    },
  },
  {
    question:
      "Have you paid off any secured loans since engaging with Just Budget?",
    value: ["Yes", "No"],
    followUp: "",
    response: {
     Yes: {
        string1: "",
        string2: "",
        string3: "",
        string4: "",
      },
      No: {
        string1: "",
        string2: "",
        string3: "",
        string4: "",
      },
    },
  },
  {
    question: "When do you see your financial situation improving?",
    value: ["Less than 3 months", "More than 3 months"],
    followUp: "",
    response: {
     "More than 3 months": {
        string1:
          "I don’t see my financial situation improving within the next 3 months to a point where I can resume to my original repayments",
        string2:
          "As far as my financial situation is concerned, I’m now able to make my new repayments, but I don’t see it improving within the next 3 months to the point where I can resume my original repayments",
        string3:
          "I can’t say that my financial situation will improve beyond my current ability to make my current repayments within the next 3 months",
        string4:
          "In the next 3 months, I don’t see my financial position improving to a point where I can resume my original repayments",
      },
      "Less than 3 months": {
        string1: "",
        string2: "",
        string3: "",
        string4: "",
        string5: "",
        string6: "",
        string7: "",
        string8: ""
      },
    },
  },
  {
    question: "Do you feel relief by not being contacted by your creditors?",
    value: ["Yes", "No"],
    followUp: "",
    response: {
     Yes: {
        string1: "Having my creditors contact Just Budget lessens my stress",
        string2:
          "It is less stressful for me not having to contact my creditors",
        string3:
          "It is less stressful for me not to have to communicate with my creditors",
        string4:
          "Not having to handle the communication with my creditors makes me feel less stressed",
        string5:
          "As a result of not having to contact my creditors, I feel less stressed",
        string6:
          "My creditor relations have become less stressful since I have not had to contact them",
        string7:
          "I am less stressed because I do not have to deal with my creditors",
        string8: "It reduces my stress not to have to speak with my creditors",
      },
      No: {
        string1: "",
        string2: "",
        string3: "",
        string4: "",
        string5: "",
        string6: "",
        string7: "",
        string8: "",
      },
    },
  },
  {
    question:
      "Have you been able to save more since being on the payment arrangement?",
    value: ["Yes", "No"],
    followUp: "",
    response: {
     Yes: {
        string1: "",
        string2: "",
        string3: "",
        string4: "",
      },
      No: {
        string1: "",
        string2: "",
        string3: "",
        string4: "",
      },
    },
  },
  {
    question: "Are you happy to continue with the payment arrangement?",
    value: ["Yes", "No"],
    followUp: "",
    response: {
     Yes: {
        string1:
          "It is important to me that my payment arrangement continues so that I can pay back my creditors",
        string2:
          "My payment arrangement with my creditors allows me to repay my debts",
        string3:
          "I am able to pay back my debts through the payment arrangement that is in place",
        string4:
          "With the payment arrangement that is in place, I am able to pay back my debts",
        string5:
          "The payment arrangement I have with my creditors allows me to pay off my debts",
        string6:
          "By paying my creditors according to my payment arrangement, I am able to repay my debts",
        string7:
          "Payment arrangements with my creditors enable me to repay my debts",
      },
      No: {
        string1: "",
        string2: "",
        string3: "",
        string4: "",
        string5: "",
        string6: "",
        string7: "",
        string8: "",
      },
    },
  },
];

const circumstanceQuestions = [
  {
    question:
      "Have the circumstances that led to your financial difficulty improved?",
    type: "circumstance",
    value: ["Yes", "No"],
    followUp: "",
    response: {
     Yes: {
        string1:
          "Due to the payment arrangement that is currently in place, the circumstances which lead to my financial difficulty have begun to improve",
        string2:
          "Currently, my financial difficulties are improving thanks to the payment arrangement in place",
        string3:
          "The payment arrangement that is in place has helped to alleviate the financial difficulty I was experiencing",
        string4:
          "The payment arrangement that I am currently under has improved the circumstances that are causing my financial difficulty",
        string5:
          "The situation which led to my financial difficulty has begun to improve as a result of the current payment arrangement",
      },
      No: {
        string1:
          "The circumstances that led to my financial difficulty remain the same, however, the payment arrangements I have with my creditors allow me to get by",
        string2:
          "While my financial difficulties remain the same, I am able to manage thanks to the payment arrangements I have with my creditors",
        string3:
          "While my financial difficulties remain the same, I am able to manage thanks to the payment arrangements I have with my creditors",
        string4:
          "My financial difficulties remain the same, but due to my payments arrangements with my creditors, I am able to make ends meet",
        string5:
          "I still face financial difficulties, but I’m able to get by thanks to the arrangements I have in place with my creditors",
        string6:
          "Although the circumstances that led to my financial difficulty remain the same, it is possible for me to make ends meet thanks to the payment arrangements I have with my creditors",
      },
    },
  },
  {
    question:
      "Are you better able to focus on your personal life now that your finances are being taken care of?",
    type: "circumstance",
    value: ["Yes", "No"],
    followUp: "",
    response: {
     Yes: {
        string1:
          "Since my finances are in order, I can devote some time to my personal life",
        string2:
          "I can now focus on my personal life now that my finances are under control",
        string3:
          "I'm able to pay my personal life some attention now that my finances are being taken care of",
        string4:
          "I'm able to devote a bit of time to my personal life now that my finances are in order",
        string5:
          "I've been able to allocate time to my personal life now that my finances are in order",
      },
      No: {
        string1: "",
        string2: "",
        string3: "",
        string4: "",
        string5: "",
        string6: "",
        string7: "",
        string8: "",
      },
    },
  },
  {
    question: "Have you moved address?",
    type: "circumstance",
    value: ["Yes", "No"],
    followUp: "What is your new Address",
    response: {
     Yes: {
        string1: "",
        string2: "",
        string3: "",
        string4: "",
      },
      No: {
        string1: "",
        string2: "",
        string3: "",
        string4: "",
      },
    },
  },
  {
    question: "Have you experienced any illness in the last few months?",
    type: "circumstance",
    followUp: "Please elaborate",
    value: ["Yes", "No"],
    response: {
     Yes: {
        string1: "",
        string2: "",
        string3: "",
        string4: "",
      },
      No: {
        string1: "",
        string2: "",
        string3: "",
        string4: "",
      },
    },
  },
  {
    question:
      "Have there been any other significant events that have affected you recently?",
    followUp: "please elaborate",
    type: "circumstance",
    value: ["Yes", "No"],
    response: {
     Yes: {
        string1: "",
        string2: "",
        string3: "",
        string4: "",
      },
      No: {
        string1: "",
        string2: "",
        string3: "",
        string4: "",
      },
    },
  },
];

const propertyQuestions = [
  {
    question:
      "Have your mortgage repayments been impacted by the rise in interest rates?",
    property: true,
    value: ["Yes", "No"],
    followUp: "",
    response: {
     Yes: {
        string1:
          "The increase in interest repayments have increase my mortgage repayments",
        string2:
          "As a result of the increase in interest rates, my mortgage repayments have increased",
        string3:
          "As interest rates have increased, my mortgage payments have increased",
        string4:
          "I have had to make more mortgage repayments due to the rise in interest rates",
        string5:
          "Interest rate increases have increased my mortgage repayments",
        string6:
          "I have had to increase my mortgage payments due to the increase in interest rates",
        string7:
          "The increase in interest rates has impacted my mortgage repayments",
      },
      No: {
        string1: "",
        string2: "",
        string3: "",
        string4: "",
        string5: "",
        string6: "",
        string7: "",
        string8: "",
      },
    },
  },
  {
    question: "Has your rent increased?",
    property: false,
    value: ["Yes", "No"],
    followUp: "",
    response: {
     Yes: {
        string1:
          "Since I started my payment arrangement, my rent has unfortunately increased",
        string2: "Since starting my payment arrangement, my rent has increased",
        string3:
          "As I have begun my payment arrangement, I have unfortunately seen my rent increase",
        string4:
          "The rent I have been paying has unfortunately increased since I started my arrangement",
        string5:
          "Unfortunately, my rent has gone up since I started my payment arrangement",
        string6:
          "during my payment arrangement, my rent has unfortunately increased",
      },
      No: {
        string1: "",
        string2: "",
        string3: "",
        string4: "",
        string5: "",
        string6: "",
        string7: "",
        string8: "",
      },
    },
  },
];

const dependantQuestions = [
  {
    question:
      "Have you had any unexpected bills/expenses/costs while being on the payment arrangement?",
    dependants: false,
    type: "finance",
    value: ["Yes", "No"],
    followUp: "",
    response: {
     Yes: {
        string1: "Unexpectedly, my bills have increased",
        string2: "There has been an unexpected increase in my bills",
        string3: "The bills I have been paying have increased unexpectedly",
        string4:
          "A increase in my living expenses has occurred unexpectedly due to the cost of living",
        string5: "I have experienced an increase in my bills without warning",
        string6:
          "The cost of living has increased, leaving me with some increased monthly expenses",
      },
      No: {
        string1: "",
        string2: "",
        string3: "",
        string4: "",
        string5: "",
        string6: "",
        string7: "",
        string8: "",
      },
    },
  },
  {
    question:
      "Are you and/or your family unit affected by the rise in living expenses?",
    dependants: true,
    type: "finance",
    value: ["Yes", "No"],
    followUp: "",
    response: {
     Yes: {
        string1:
          "My family and I have been impacted by the rising costs of living",
        string2: "The rising costs of living has affected my family and me",
        string3:
          "As the costs of living rise, my family and I have been impacted",
        string4: "Increased living costs have impacted my family and I",
        string5:
          "Cost of living increases have adversely affected me and my family",
        string6: "Rising living costs have had an impact on my family and me",
        string7:
          "Increased living costs have been a challenge for my family and me",
        string8:
          "As a family, we have been negatively impacted by the rising cost of living",
      },
      No: {
        string1: "",
        string2: "",
        string3: "",
        string4: "",
        string5: "",
        string6: "",
        string7: "",
        string8: "",
      },
    },
  },
  {
    question:
      "Have your dependants experienced illness in the last few months?",
    dependants: true,
    type: "circumstance",
    followUp: "Which illness did they experience ?",
    value: ["Yes", "No"],
    response: {
     Yes: {
        string1: "",
        string2: "",
        string3: "",
        string4: "",
      },
      No: {
        string1: "",
        string2: "",
        string3: "",
        string4: "",
      }
    }
  }
];

// money maker inputs go here
const person = {
  name: "Alex",
  property: true,
  dependants: true,
};

// question generator based on the objects above

const propertyQuestionsFinance = propertyQuestions.filter(
  (question) => question.property === person.property
);
const DependantQuestionsFinance = dependantQuestions.filter((question) => {
  return (
    question.type === "finance" && question.dependants === person.dependants
  );
});
const DependantQuestionsCircumstance = dependantQuestions.filter((question) => {
  return (
    question.type === "circumstance" &&
    question.dependants === person.dependants
  );
});

const totalFinanceQuestions = [
  ...financeQuestions,
  ...DependantQuestionsFinance,
  ...propertyQuestionsFinance,
];
const totalCircumstanceQuestions = [
  ...circumstanceQuestions,
  ...DependantQuestionsCircumstance,
];
const totalQuestions = [
  ...totalFinanceQuestions,
  ...totalCircumstanceQuestions,
];
