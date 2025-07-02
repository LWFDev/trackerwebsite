
import { businessQuestions } from './businessQuestions';
import { contactQuestions } from './contactQuestions';

// Combine all questions by step (removed account step)
export const onboardingSteps = [
  { questions: businessQuestions },
  { questions: contactQuestions },
  { questions: [] } // Complete step has no questions
];

export {
  businessQuestions,
  contactQuestions
};
