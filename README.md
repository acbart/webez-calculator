# Simple WebEZ Examples

Accept the assignment
Clone the repo
Open the instructions

Install
- npm install

Run
- npm run start

View in the browser

Try editing the HTML

Change the header

Dynamic text from typescript side
- Add a new span element
- BindValue a new attribute

Open the JavaScript developer console so you can see errors there.
- Some text is normal and fine. You're looking for red boxes that say "Uncaught Error"

Make a new component: Boop Button
- cd src/app
- webez component boop-button
- Add the HTML
- Create the component and add it to MainComponent, don't forget to import
- Import the BindValue decorator
- Create the decorated field
- Create the decorated method
  - Try just adding "1", oops that is string concatenation!
  - Need to convert it to a number, do the math, and then convert it back
	
	
Make a new component: Image Selector
- webez component image-selector
- Put at least two images in the assets folder
- Make the image tag
- Make the select box tag
- Add the component at a specific place
- Wire up the select box to the image
- Add in @Change events
	
Make a new component: Simple Calculator
- webez component simple-calculator
- Add the HTML
- Create the component and add it to MainComponent, don't forget to import
- Left number, bind value
- Right number, bind value
- Operation select box, bind value
- Result, bind value

- onFirstNumberChange,
- onSecondNumberChange,
- onOperationChange

- calculate button

Make a new component: Joke
- webez component joke
- Add the HTML
- Create the component and add it to MainComponent, don't forget to import
- Add a span to display the joke
- Add a span to display the punchline
- Add a button to show the punchline
- BindVisibleToBoolean("punchline") for a visible attribute
- @Click("reveal")

Make a new component: Box Editor
- webez component box-editor
- Create the component and add it to MainComponent, don't forget to import
- Copy over the given HTML, piece by piece
- Handle padding
- Handle margin
- Handle background color