// const heading = React.createElement("h1", {}, "Radhe Radhe");
// const path1 = ReactDOM.createRoot(document.getElementById('myDiv1'));
// path1.render(heading);

// const heading2 = React.createElement("h1", {}, "Radhe Radhe");
// const path2 = ReactDOM.createRoot(document.getElementById('myDiv2'));
// path2.render(heading2);

// const heading3 = React.createElement("h1", {}, "Radhe Radhe");
// const path3 = ReactDOM.createRoot(document.getElementById('myDiv3'));
// path3.render(heading3);



const headingElement = React.createElement('h1', {id: "hello"}, 'Hello, React!');
const paragraphElement = React.createElement('p', {}, 'This is a paragraph.');
const lineBreakElement = React.createElement('br');
const inputElement = React.createElement('input', { type: 'text', placeholder: 'Type here' });
const buttonElement = React.createElement('button', {}, 'Click me');

// Create a div element to hold multiple elements
const containerElement = React.createElement('div', {}, [
  headingElement,
  paragraphElement,
  lineBreakElement,
  inputElement,
  buttonElement
]);

// Create a root and render the container element
const root = ReactDOM.createRoot(document.getElementById('myDiv1'));
root.render(containerElement);
