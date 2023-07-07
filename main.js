(function () {
   const memojiEl = document.querySelector(".myMemoji");
   const statementsEl = document.querySelector(".statements");

   const statements = [
      "Hi, I'm Jonny!",
      "I'm a freelance Full Stack Web Developer specializing in AWS serverless apps.",
      'Email me at <a href="mailto:mr.jonny.ortiz@gmail.com">mr.jonny.ortiz@gmail.com</a>.',
      'Github: <a href="https://github.com/MrJonnyOrtiz">https://github.com/MrJonnyOrtiz</a>',
      "Thanks for stopping by!",
   ];

   const memojis = [
      "./myHiMemoji.webp",
      "./myWorkingMemoji.webp",
      "./myCallMeMemoji.webp",
      "./myPresentingMemoji.webp",
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
