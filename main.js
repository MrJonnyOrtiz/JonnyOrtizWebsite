(function () {
   const memojiEl = document.querySelector(".myMemoji");
   const statementsEl = document.querySelector(".statements");

   const statements = [
      "Hi, I'm Jonny!",
      "I'm a freelance Full Stack Web Developer specializing in React and AWS serverless apps.",
      'Email me at <a href="mailto:mr.jonny.ortiz@gmail.com">mr.jonny.ortiz@gmail.com</a>.',
      'Check out my code on <a href="https://github.com/MrJonnyOrtiz" target="_blank" rel="noreferrer" rel="noopener">Github</a>',
      'Check out my blog posts:<br><a href="https://medium.com/@imj0nny0rt1z/react-rails-project-planning-process-711839a94b20" target="_blank" rel="noreferrer" rel="noopener">React & Rails Project Planning Process</a><br><a href="https://medium.com/@imj0nny0rt1z/general-javascript-coding-best-practices-800391d91c18" target="_blank" rel="noreferrer" rel="noopener">General Javascript Coding Best Practices</a><br><a href="https://medium.com/@imj0nny0rt1z/react-ed-8b2248c8b807" target="_blank" rel="noreferrer" rel="noopener">React-ed</a><br><a href="https://www.sarasotaremodeling.com/blog.html" target="_blank" rel="noreferrer" rel="noopener">More articles for a client</a>',
      "Thanks for stopping by!",
   ];

   const memojis = [
      "./myHiMemoji.webp",
      "./myWorkingMemoji.webp",
      "./myCallMeMemoji.webp",
      "./myPresentingMemoji.webp",
      "./myLookAtMeMemoji.webp",
      "./myHeartMemoji.webp",
   ];

   let index = 0;

   const showStatement = (statement) => {
      // update memoji and animate it
      memojiEl.src = memojis[index];
      anime({
         targets: memojiEl,
         opacity: 1,
         duration: 3000,
         easing: "easeInSine",
      });

      // show statement
      const pEl = document.createElement("p");
      statementsEl.appendChild(pEl);
      pEl.classList.add("statement");
      pEl.innerHTML = statement;
      anime({
         targets: pEl,
         opacity: 1,
         duration: 1500,
         easing: "easeInSine",
      });
   };

   const showStatements = () => {
      let statement = statements[index];
      if (!statement) return;
      showStatement(statement);
      ++index;
      setTimeout(showStatements, 2500);
   };

   showStatements();
})();
