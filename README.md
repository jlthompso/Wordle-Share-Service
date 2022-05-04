# Wordle-Share-Service
Microservice that converts a JSON representation of a Wordle game to a Unicode string.

Responds to a POST request on /localhost:3000/convsvc containing a JSON object with the following
properties:
  "word"
    List of characters in the solution word.
    Example:
      ["F", "L", "A", "S", "K"]
  "conditions"
    List of lists where each cell represents the hint at a particular cell index in the form
    arr[column][row]. The only valid values at each index are the numbers 0/1/2 which represent
    the following hint colors:
      0: clear  \u{2B1C}  ⬜
      1: yellow \u{1F7E8} 🟨
      2: green  \u{1F7E9} 🟩
    Example:
      [[0, 0, 0, 1, 2],
       [0, 0, 1, 1, 1],
       [0, 0, 1, 0, 1],
       [2, 0, 1, 1, 1],
       [2, 2, 1, 1, 1],
       [2, 2, 2, 2, 2]]
Returns a unicode string in the response body containing the solution word and hints.
Example output:
  FLASK
  ⬜⬜⬜🟨🟩
  ⬜⬜🟨🟨🟨
  ⬜⬜🟨⬜🟨
  🟩⬜🟨🟨🟨
  🟩🟩🟨🟨🟨
  🟩🟩🟩🟩🟩


install dependencies:
> npm install

run the app:
> npm start

run the app with nodemon:
> npm run devstart
