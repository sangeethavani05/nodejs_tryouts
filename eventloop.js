const tom = () => console.log('Tom');
const jerry = () => console.log('Jerry');
const doggy = () => console.log('Doggy');

const cartoon = async() => {
  console.log('Cartoon');

  // Macro task/Task Queue - Low Priority
  setTimeout(tom, 50);
  setTimeout(doggy, 30);

  // Micro task/Job Queue - High Priority
  new Promise((resolve, reject) =>
    resolve('I am a Promise, right after tom and doggy! Really?')
  ).then(resolve => console.log(resolve));
  new Promise((resolve, reject) =>
    resolve('I am a Promise after Promise!')
  ).then(resolve => console.log(resolve));

  jerry();
}

cartoon();
