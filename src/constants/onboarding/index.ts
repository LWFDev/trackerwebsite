
import { businessQuestions } from './businessQuestions';
import { contactQuestions } from './contactQuestions';
import { accountQuestions } from './accountQuestions';

// Combine all questions by step
export const onboardingSteps = [
  { questions: businessQuestions },
  { questions: contactQuestions },
  { questions: accountQuestions },
  { questions: [] } // Complete step has no questions
];

export {
  businessQuestions,
  contactQuestions,
  accountQuestions
};
