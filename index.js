const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// const titleCased = function(str) {
//     const newTitles = str.map(function (title) {
//       return title.toLowerCase().split(' ').map((word) => {
//         return word[0].toUpperCase() + word.slice(1)
//       }).join(' ')
//     })
//     return newTitles;
//   }

// const titleCased = () => {
//   return tutorials.map(title => {
//   return title.toLowerCase().split(' ').map((word) => {
//     return word[0].toUpperCase() + word.slice(1)
//   }).join(' ')
// })
// }

const titleCased = function() {
  return tutorials.map(function (title) {
    return title.split(' ').map((word) => {
      return word[0].toUpperCase() + word.slice(1)
    }).join(' ')
  })
}


