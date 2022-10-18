# React Demo for learning purposes

Raquel Sánchez Ventero

https://www.linkedin.com/in/raquelsanchezventero/

## INSTRUCTIONS

Download the zip and unzip. Open the folder in Visual Code Studio or your preferred code editor.
For installing the node modules, open the Terminal and type: npm install.
Then type npm start.

## SOME NOTES
<ul>
  <li>I use lazy load for most of the components, showing the LoadingSpinner component while the component is loading.</li>
<li>I also use extensively useState and useEffect aswell.</li>
<li>The project is responsive.</li>
</ul>

## APPS

### COUNTDOWN
<b>Components: Countdown.js</b><br>
<b>Modules: Calendar from react-calendar</b><br>
Creates a countdown from a date choosen by the user in the react-calendar.<br>
I choose this one, because it was very nice and easy to fetch the data from it.

### POSTICKS
<b>Components: Posts.js, Posticks.js, AddPost.js, SearchPost.js</b><br>
<b>Modules: nanoid</b><br>
You can add notes, delete and change the color of the background of the notes.

### CALCULATOR
<b>Components: Calculator.js, CalculatorButton.js, CalculatorButtonClear.js, CalculatorScreen.js.<br>
<b>Modules: evaluate, sqrt, pow, factorial from mathjs.</b><br>
This calculator is using the method of mathjs to evaluate a string like a mathematical expresion.<br>
For example: the string '234+2.52' is converted as 234 + 2.52.

### ROCK PAPER SCISSORS GAME
  <b>Components: StonePaperScissorsGame.js.</b><br>
This game uses the image like a button, using the method onClick() this way:<br>
onClick={(e) => handleClickChoice('Paper').<br>
The images are circled. To create the shadow for them I had to add this to the css:<br>
border-radius:50%;<br>

### COUNTER
  <b>Components: Counter.js</b><br>
Very simple counter to count the clicks of the button.<br>

### JSON BD
  <b>Components: UsersTable.js</b><br>
A sample of how to fetch a JSON DB stored in the same directory of the project.<br>

### TO DOs
<ul>
  <li>Include a Menu.</li>
  <li>Include a way to change the Posticks</li>
  <li>Fix an error in Calculator.</li>
</ul>

