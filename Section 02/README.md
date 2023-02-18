# REACT USING NODE JS

### Creating new REACT app

#### npx crete-react-app <app_name>

<br>

### Starting a REACT app

#### npm start

<br>

### VS CODE --> shortcut to create new functional component

#### "raface" + TAB

<br>
<br>

### REACT props

```javascript
const Gamecircle = ({ id }) => {
  return <div onClick={onClick}>Gamecircle : id {id}</div>;
};

<Gamecircle id={1} />;
```

<br>

### REACT children (A special/predefined property)

```javascript
<Gamecircle id={1}>Hello World</Gamecircle>;

const Gamecircle = ({ id, children }) => {
  return <div onClick={onClick}>{children}</div>;
};
```

<br>

### onClick

```javascript
onClick={(evt) => print(evt.target)}

// Always passes the event (cant change it)
```

<br>

### Inline Styles

```javascript
<Gamecircle id={1} color={"red"}>
  RED
</Gamecircle>;

const Gamecircle = ({ id, color, children }) => {
  return (
    <div onClick={onClick} style={{ color: color }}>
      {children}
    </div>
  );
};
```

<br>

### CSS

- in REACT default unit is pixels, 100 = 100px

_grid_
_4x4_

```css
display: "grid";
gridtemplatecolumns: "1fr 1fr 1fr 1fr";
gridtemplaterows: "1fr 1fr 1fr 1fr";
```

<br>

_centering a div_

```css
width: "500px";
position: "absolute";
left: "50%";
marginleft: "-250px";
top: "50%";
margintop: "-250px";
```

_css repeat()_

```css
'1fr 1fr 1fr 1fr' in js => repeat(4, 1fr) in css
```

<br>

### Dynamic Styles

```javascript
style={(id%2===0)? {backgroundColor: 'red'} : {backgroundColor: 'blue'}
```

<br>

### Dynamic Classes

```javascript
className={`gameCircle ${(id % 2 === 0) ? 'even' : 'odd'}`}
```

```css
.odd {
  background-color: red;
}
.even {
  background-color: blue;
}
```

<br>

- REACT -> state is updated Asynchronously
  <br>

### Copying a array

```javascript
/*Copying a arr to newarr*/
let newarr = [..arr]
```

<br>

### Reduce function

#### arr.reduce(callback(accumulator, currentValue))

```javascript
const message = ["JavaScript ", "is ", "fun."];

// function to join each string elements
function joinStrings(accumulator, currentValue) {
  return accumulator + currentValue;
}

// reduce join each element of the string
let joinedString = message.reduce(joinStrings);
console.log(joinedString);
// Output: JavaScript is fun.
```

<br>

#### arr.reduce(callback(accumulator, currentValue), initialValue)

```javascript
const expenses = [1800, 2000, 3000, 5000, 500];
const salary = 15000;

// function that subtracts all array elements from given number
// 15000 - 1800 - 2000 - 3000 - 5000 - 500
let remaining = expenses.reduce(
  (accumulator, currentValue) => accumulator - currentValue,
  salary
);
console.log(remaining); // 2700
```

<br>
<br>

## Component Lifecycle Events

### ComponentDidLoad

```javascript
    useEffect ((=> {
        // what ever happens when loads
    } , []))
```

### ComponentDidUpdate 'render'
```javascript
    useEffect ((=> {
        // what ever happens when renders
    } )) <--- NO BRACKETS or BRACKETS WITH DIPENDENCY
```

#### ComponentDidLoad is a method that is called once, immediately after the component is rendered in the DOM for the first time. This method is typically used to perform actions that need to happen only once when the component is first initialized, such as initializing state, fetching data, or setting up event listeners.
<br>

#### ComponentDidUpdate, on the other hand, is a method that is called every time the component's state or props are updated and the component is re-rendered. This method is useful for performing actions that need to happen every time the component is updated, such as updating the component's state, fetching new data, or updating the DOM based on the new state or props.
<br>

#### In summary, ComponentDidLoad is called once when the component is initially rendered, while ComponentDidUpdate is called every time the component is updated due to changes in its state or props.

