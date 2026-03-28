import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

if (typeof window !== 'undefined' && window.console) {
  // Welcome message with badge
  console.log('%cWhat are you looking for? 👀', 'color: #fff; background: #8b5cf6; padding: 8px 16px; border-radius: 8px; font-size: 16px;');
  console.log('I also take a look at this but it\'s usually ugly');
  console.log('But hey, if you are looking for an engineer who knows about architecture with C4 Modeling and Figma at the same time, here I am haha');
  console.log('You know, let\'s play a game, here\'s your tip: dXNlcmV4cGVyaWVuY2VvbnRvcA==');

  const easterEggsProcess = () => {
    // Unlock the secret mini-game
    (window as any).unlockSecret = function() {
      const code = prompt('So what\'s your response:');
      if (code === 'userexperienceontop') {
        alert('🎉 Yeah! Exactly, our purpose is to make users experience our top priority!');
      } else {
        alert('Oops! Try again. Hint: It’s something every engineer needs to do 😉');
      }
    };
    console.log('Type unlockSecret() and lets start with the game!');

    // Ask Me Anything bot
    (window as any).askRuben = function() {
      const q = prompt('Ask me anything about my skills or experience!');
      alert('Great question! Im still building this thing, so Ill have a chatbot for it');
    };
    console.log('Type askRuben() to ask me anything!');

    // Recruiter badge
    (window as any).getRecruiterBadge = function() {
      alert('🏅 Congrats! You’ve earned the “Curious Recruiter” badge for exploring my site. Let’s connect!');
    };
    console.log('Type getRecruiterBadge() to claim your badge!');

    // Tech stack quiz
    (window as any).stackQuiz = function() {
      const answer = prompt('Which styling framework did I use for this site?');
      if (answer && /tailwind/i.test(answer)) {
        alert('Exactly! I use Tailwind for its usability, and I dont need to use CSS lol\nOf course I know CSS though lol');
      } else {
        alert('Not quite! It’s Tailwind CSS.');
      }
    };
    console.log('Type stackQuiz() to play a quick quiz!');
  };
  easterEggsProcess();
}
bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
