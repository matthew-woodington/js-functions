(function () {
  "use strict";

  // ---------------------
  // Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
  // ---------------------

  // calculates the highest number of a pair
  // num1 and num2 are the two numbers being compared
  // return which number out of num1 and num2 is highest
  function max(num1, num2) {
    if (num1 > num2) {
      return num1;
    } else {
      return num2;
    }
  }

  // ---------------------
  // Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
  // ---------------------

  // calculates the highest number of three given values
  // num1-3 are numbers given to be compared
  // return the highest numerical value of the three
  function maxOfThree(num1, num2, num3) {
    return Math.max(num1, num2, num3);
  }

  // ---------------------
  // Define a function isVowel() that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
  // ---------------------

  // determines whether or not a single letter sring is a vowel or not
  // str is a single letter string
  // return true if string is a vowel return false if not
  function isVowel(str) {
    let string = str.toLowerCase();

    if (
      string === "a" ||
      string === "e" ||
      string === "i" ||
      string === "o" ||
      string === "u"
    ) {
      return true;
    } else {
      return false;
    }
  }

  // ---------------------
  // Write a function rovarspraket() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
  // ---------------------

  function rovarspraket(str) {
    let rov = "";

    for (let i = 0; i < str.length; i++) {
      if (
        str[i] === "a" ||
        str[i] === "e" ||
        str[i] === "i" ||
        str[i] === "o" ||
        str[i] === "u"
      ) {
        rov = rov + str[i];
      } else if (str[i] === " ") {
        rov = rov + str[i];
      } else {
        rov = rov + str[i] + "o" + str[i];
      }
      return rov;
    }
  }

  // ---------------------
  // Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
  // ---------------------

  // cycles through an array and adds all elements to generate a sum
  // array is an array of any length containing numbers
  // sum is the product of all elements of the array added together
  function sum(array) {
    let sum = 0;

    for (let i = 0; i < array.length; i++) {
      sum = sum + array[i];
    }
    return sum;
  }

  // cycles through an array and multiplies all elements to generate a final product
  // array is an array of any lenght containing numbers
  // sum is the product of all elements of the array multiplied together
  function multiply(array) {
    let sum = 1;

    for (let i = 0; i < array.length; i++) {
      sum = sum * array[i];
    }
    return sum;
  }

  // ---------------------
  // Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
  // ---------------------

  // uses a for loop to work backward through a string and produce a reversal of that string
  // str is a string of any length containing any character
  // newStr is the reversal of str
  function reverse(str) {
    let newStr = "";

    for (let i = str.length - 1; i >= 0; i--) {
      newStr = newStr + str[i];
    }
    return newStr;
  }

  // ---------------------
  // Define a function findLongestWord() that takes an array of words and returns the length of the longest one.
  // ---------------------

  // ---------------------
  // Define a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
  // ---------------------

  // ---------------------
  // Define a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
  // ---------------------

  ////////////////////////////////////////////////////////////////////////
  /////////////////////////DO NOT CHANGE CODE BELOW///////////////////////
  ////////////////////////////////////////////////////////////////////////

  console.assert(max(2, 4) === 4, "function max error");

  console.assert(maxOfThree(1, 2, 3) === 3, "ERROR funtion maxOfThree");

  console.assert(maxOfThree(2, 3, 1) === 3, "ERROR funtion maxOfThree");

  console.assert(maxOfThree(3, 2, 1) === 3, "ERROR maxOfThree");

  console.assert(isVowel("a") === true, "ERROR function isVowel");

  console.assert(isVowel("b") == false, "ERROR function isVowel");

  console.assert(
    rovarspraket("this is fun") === "tothohisos isos fofunon",
    "ERROR function rovarspraket"
  );

  console.assert(sum([1, 2, 3, 4]) === 10, "ERROR function sum");

  console.assert(multiply([1, 2, 3, 4]) === 24, "ERROR function multiply");

  console.assert(
    reverse("jag testar") === "ratset gaj",
    "ERROR function reverse"
  );

  console.assert(
    findLongestWord([
      "hello",
      "world",
      "does",
      "anyone",
      "really",
      "know",
      "what",
      "time",
      "it",
      "is",
    ]) === 6,
    "ERROR function findLongestWord"
  );

  console.assert(
    filterLongWords(
      [
        "hello",
        "world",
        "does",
        "anyone",
        "really",
        "know",
        "what",
        "time",
        "it",
        "is",
      ],
      4
    ).length === 4,
    "ERROR function filterLongWords"
  );

  console.assert(charFreq("abbabcbdbabdbdbabababcbcbab").a === 7);

  console.assert(charFreq("abbabcbdbabdbdbabababcbcbab").b === 14);

  console.assert(charFreq("abbabcbdbabdbdbabababcbcbab").c === 3);

  console.assert(charFreq("abbabcbdbabdbdbabababcbcbab").d === 3);
})();
