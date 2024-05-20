"use strict";

// exercise 1
function youngestAge(user) {
  if (user.length === 0) {
    return null;
  }

  let youngestUser = users.reduce((youngest, user) => {
    if (user.age < youngest.age) {
      return user;
    } else {
      return youngest;
    }
  });

  return youngestUser.age;
}

const users = [
  { name: "Temo", age: 25 },
  { name: "Lasha", age: 21 },
  { name: "Ana", age: 28 },
];
console.log(youngestAge(users));

// exercise 2
function cloneUser(user) {
  const clonedUser = { ...user };

  return clonedUser;
}

// exexrcise 3
function rollDice() {
  return Math.trunc(Math.random() * 6) + 1;
}
function roll() {
  let tries = 0;
  let roll = rollDice();

  while (roll !== 6) {
    roll = rollDice();
    tries++;
  }
  return tries;
}

function winner() {
  const playerA = roll();
  console.log(`player A rolled in ${playerA}`);

  const playerB = roll();
  console.log(`player A rolled in ${playerB}`);

  if (playerA < playerB) {
    console.log(`player A won the game 🎉`);
  } else if (playerA === playerB) {
    console.log(`It's a draw 🎲`);
  } else {
    console.log(`player B is a winner 🎉`);
  }
}
