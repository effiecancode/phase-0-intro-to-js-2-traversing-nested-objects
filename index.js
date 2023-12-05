// Hello recursion 🤩

// OBJECTS IN OBJECTS
const userInfo = {
    firstName: "Avi",
    lastName: "Flombaum",
    company: {
      name: "Flatbook Labs",
      jobTitle: "Developer Apprentice",
    },
    friends: [
      {
        firstName: "Nancy",
        lastName: "Burgess",
        company: {
          name: "Flatbook Labs",
          jobTitle: "Developer Apprentice",
        },
      },
      {
        firstName: "Corinna",
        lastName: "Jackson",
        company: {
          name: "Flatbook Labs",
          jobTitle: "Lead Developer",
        },
      },
    ],
    projects: [
      {
        title: "Flatbook",
        description:
          "The premier Flatiron School-based social network in the world.",
      },
      {
        title: "Scuber",
        description:
          "A burgeoning startup helping busy parents transport their children to and from all of their activities on scooters.",
      },
    ],
  };


console.log(userInfo.lastName);

// dig in to a nested object just add another dot
console.log(userInfo.company.jobTitle);

// if obj is nested inside an arr, use index
console.log(userInfo.friends[0].firstName);




// ARRAYS IN ARRAYS

const letters = ["a", ["b", ["c", ["d", ["e"]], "f"]]];

console.log(letters[1]);

//to dig into an array inside an array
console.log(letters[1][1]);

// to dig further
console.log(letters[1][1][1]);

// further 😆
console.log(letters[1][1][1][1]);



// RECURSION

function deepIterator(target) {
    console.log("Argument: ", target);
    if (typeof target === "object") {
      for (const key in target) {
        deepIterator(target[key]);
      }
    } else {
      console.log("logged value: ", target);
    }
  }

//  const numbers = [1, [2, [4, [5, [6]], 3]]];
//  console.log(deepIterator(numbers));

// the function first checks if the argument is an object
// If the argument isn't an object,
// deepIterator() simply console.log()s out the argument and exits.
// However, if the argument is an object, we iterate over the properties (or elements) in the object,
// passing each to deepIterator() and re-invoking the function.

// That's recursion! get it? 😆

