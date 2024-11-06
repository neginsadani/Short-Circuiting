const user1 = { username: "JaneDoe", language: "Spanish" };
const user2 = {};

function getWelcomeMessage({ username, language }) {
  const name = username || "Guest";
  const lang = language || "English";

  return `Hello, ${name}! Welcome to our site in ${lang}.`;
}

console.log(getWelcomeMessage(user1));
console.log(getWelcomeMessage(user2));
