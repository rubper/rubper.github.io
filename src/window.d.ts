export {};

declare global {
  interface Window {
    unlockSecret: () => void;
    askRuben: () => void;
    getRecruiterBadge: () => void;
    stackQuiz: () => void;
  }
}
