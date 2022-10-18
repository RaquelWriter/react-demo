# React Demo for learning purposes

Raquel Sánchez Ventero

https://www.linkedin.com/in/raquelsanchezventero/

## INSTRUCTIONS

Download the zip and unzip. Open the folder in Visual Code Studio or your preferred code editor.
For installing the node modules, open the Terminal and type: npm install.
Then type npm start.

## SOME NOTES
I use lazy load for most of the components, showing the LoadingSpinner component while the component is loading.
I also use extensively useState and useEffect aswell.
The project is responsive.

## APPS

### COUNTDOWN
Components: Countdown.js
Modules: Calendar from react-calendar
Creates a countdown from a date choosen by the user in the react-calendar.
I choose this one, because it was very nice and easy to fetch the data from it.

### POSTICKS
Components: Posts.js, Posticks.js, AddPost.js, SearchPost.js 
Modules: nanoid
You can add notes, delete and change the color of the background of the notes.

### CALCULATOR
Components: Calculator.js, CalculatorButton.js, CalculatorButtonClear.js, CalculatorScreen.js.
Modules: evaluate, sqrt, pow, factorial from mathjs.
This calculator is using the method of mathjs to evaluate a string like a mathematical expresion.
For example: the string '234+2.52' is converted as 234 + 2.52.

### ROCK PAPER SCISSORS GAME
Components: StonePaperScissorsGame.js.
This game uses the image like a button, using the method onClick() this way:
onClick={(e) => handleClickChoice('Paper').
The images are circled. To create the shadow for them I had to add this to the css:
border-radius:50%;

### COUNTER
Components: Counter.js
Very simple counter to count the clicks of the button.

### JSON BD
Components: UsersTable.js
A sample of how to fetch a JSON DB stored in the same directory of the project.

### TO DOs
<ul>
  <li>Include a Menu.</li>
  <li>Include a way to change the Posticks</li>
  <li>Fix an error in Calculator.</li>
</ul>

