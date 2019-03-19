# <img src="https://cloud.githubusercontent.com/assets/7833470/10899314/63829980-8188-11e5-8cdd-4ded5bcb6e36.png" height="60"> **React** Props

### LEARNING OBJECTIVES

_After this lesson, you will be able to:_

- You will understand the basics of React Props.
- Will understand how data flows through-out a React application.
- Have a stronger understanding of the Parent Child relationship.

### STUDENT PRE-WORK

_Before this lesson, you should already be able to:_

- Have a clear understanding of the basics of React and how to start an applicaton.
- Will be able to break a site down into components and understand seperation of concerns via the component methodology.

## What are props?

Up to this point we have made created react application and reformatted HTML into react components. We have also learned that we can dynamically alternate between components with the React Virtual Dom. But, with that seperation comes an issue. How do we share data between these componeents? Props to the rescue!

### Props = Properties

Props is a short hand way of saying properties. By assigning a Property to a compenent we are giving it an attribute with value. Let's look at an HTML element real quick.

```html
<div class="greeting">Hello</div>
```

The `class` part of the html is a property of the html element. We are basically creating a KEY:Value pair for the HTML element. So what would this basically look like in JS?

```js
let div = {
	type: 'div',
	innerText: 'Hello',
	class: ['greeting']
};
```

Now let's look at a react component.

```js

render() {
  let greeting = 'hello'
	return (
			<Card data={greeting} />
	);
}
```

We have created a Property called `data` and gave it a value of the greeting variable.

So if we break down the component as an object it would like this.

```js
let Card = {
	type: 'react component',
	data: 'hello'
};
```

### ACTIVITY 2-min

Now that you can see the properties as an object. What other type of data can we store in a prop?

### Now what?

Since we can now assing properties how can we access them?

To practice assigning Props and using them we will use an existing application.

```bash
$ git clone
$ cd React-Props
$ npm i
$ npm start
```
