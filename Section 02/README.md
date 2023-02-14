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