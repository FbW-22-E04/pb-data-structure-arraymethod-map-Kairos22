// Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.
//1
function camelize(str) {
     const removedDashes = str.split('-')
     console.log('removedDashes', removedDashes);

      const camelizedArray = removedDashes.map((word, idx) => {

         if(idx > 0) {
            word = word[0].toUpperCase() + word.slice(1)
            console.log('camelizedArray word', word);
         }
         return word
      })
      console.log('camlizedArray', camelizedArray.join(''));
}

console.log(camelize("background-color"));
console.log(camelize("list-style-image"));
console.log(camelize("-webkit-transition"));
console.log('------------------------------------');

// 2
const users = [
   { name: "John", surname: "Smith", id: 1 },
   { name: "Pete", surname: "Hunt", id: 2 },
   { name: "Mary", surname: "Key", id: 3 }
]

function transformUsers(arr) {
   const newArr = arr.map(user =>{

      const newUser = {}

      newUser.fullName = user.name + ' ' + user.surname
      newUser.id = user.id

      return newUser
   })

   console.log(newArr);
}

transformUsers(users)
console.log('-----------------------------2');