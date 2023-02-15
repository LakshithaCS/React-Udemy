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
<Gamecircle id={1}>
    Hello World
</Gamecircle>

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
<Gamecircle id={1} color={'red'}>
    RED
</Gamecircle>

const Gamecircle = ({id, color, children}) => {
    return (
        <div onClick={onClick} style={{color:color}}>
            {children}
        </div>
    )
}
```
<br>

### CSS

* in REACT default unit is pixels, 100 = 100px

*grid*
*4x4*
```css
display: 'grid';
gridTemplateColumns: '1fr 1fr 1fr 1fr';
gridTemplateRows: '1fr 1fr 1fr 1fr';

```
<br>

*centering a div*
```css
width: '500px';
position: 'absolute';
left:'50%';
marginLeft: '-250px';
top: '50%';
marginTop: '-250px';
```

*css repeat()*
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
.odd{
    background-color: red;
}
.even{
    background-color: blue;
}
```

