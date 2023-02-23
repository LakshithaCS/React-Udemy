## JSON Sever

### npm i -g json-server

### create a json file

```javascript
{
    "categories": [
        {"id":1, "title":"Fridges"},
        {"id":2, "title":"Kettles"},
        {"id":3, "title":"Televisions"}
    ],
    "products": [
        {"id":1, "catId": 1, "title":"Beko White Fridge Freezer" },
        {"id":2, "catId": 1, "title":"Whirlephool White Fridge Freezer" }
    ]
}
```

### Run

#### json-server --watch \<path-to-json-file\> --port \<port\>

### OR

#### npx json-server --watch \<path-to-json-file\> --port \<port\>

<br>

### REQUESTS

#### GET /all -> http://localhost:3001/db

#### GET /products -> http://localhost:3001/products

#### GET /products where Id=1 -> http://localhost:3001/products?id=1

<br>

### FETCH API

```javascript
fetch("http://localhost:3001/products")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  });
```

<br>

### \*\*

```javascript
const render = () => {
  return arr.map((data) => {
    return <div key={data.id}> {data.name}</div>;
  });
};

{
  render();
}
```

### EQUALS

```javascript
const render = () => {
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    res.push(<div key={arr[i].id}> {arr[i].name}</div>);
  }
  return res;
};

{
  render();
}
```

<br>

### Refactoring Fetcher

```javascript
/* fetcher.js */
const BASE_URL = "http://localhost:3001/";

export const fetcher = async (url) => {
  const response = { error: null, data: [] };
  try {
    const res = await fetch(BASE_URL + url);
    if (!res.ok) {
      throw new Error(`Request failed with status ${res.status}`);
    }
    const data = await res.json();
    response.data = data;
  } catch (error) {
    response.error = error.message;
  }
  return response;
};

export const getProducts = (id) => {
  return fetcher("products?catId=" + id);
};

/* App.js */
const [categories, setCategories] = React.useState({ error: "", data: [] });
const fetchCategories = async () => {
  const response = await getCategories();
  setCategories(response);
};
fetchCategories();
```

<br>

#### Pasing object as props

```javascript
products.data.map((p) => {
  return <CategoryProduct {...p}>{p.title}</CategoryProduct>;
});
```

<br>

### React Router

#### npm install react-router-dom

#### import it at Index.js

```javascript
import { Route, Routes, BrowserRouter } from "react-router-dom";

<React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/products/:productId" element={<ProductDetail />} /> {/*URL parameters*/}
    </Routes>
  </BrowserRouter>
</React.StrictMode>;
```

<br>

### Navigation

### 1. Link

```javascript
import { Link } from "react-router-dom";

<Link to={`/products/${id}`}>{title}</Link>;
```

<br>

#### 2. useNavigate hook

```javascript
import { useNavigate } from "react-router-dom";

const navigate = useNavigate();

<button 
  onClick={() => navigate(`/product/${id}`)}
  >
  View Product
</button>;
```
<br>

### Reading URL parameters
#### useParams hook
```javascript
import { useParams } from "react-router-dom";

const params = useParams();

<div>ProductDetail id: {params.productId}</div> {// has to match exactly with param name of route}

// OR
const {productId} = useParams();

<div>ProductDetail id: {productId}</div>
```

### Styled Components
#### styled-components.com/docs
#### npm install --save styled-components
```javascript
import styled from 'styled-components';


const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

<Title>
      Hello World!
</Title>


/* Adapt the colors based on primary prop */
const Button = styled.button`
  background: ${props => props.primary ? "palevioletred" : "white"};
`

/*Extending*/
const Button = styled.button`
  color: palevioletred;
`;

const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;

/*Hover*/
const Thing = styled.div`
  color: blue;

  &:hover {
    color: red; // <Thing> when hovered
  }
`

/*Attributes*/
const Input = styled.input.attrs({ type: "checkbox" })``;
<Input defaultChecked />

```
<br>

### Dangerously Set Inner HTML
#### if you have a data like this
```javascript
const data = "<b> Hello World </b>";
```
#### It wont apply bold style when it is displayed
#### bold tags will be displayed as a string

### To display it with Bold style
```javascript
const data = "<b> Hello World </b>";

const createMarkup = () => {
    return { __html: data }
}

<h1 dangerouslySetInnerHTML={createMarkup()} ></h1>
```
```html
Hello World
```

### OUTLET & LAYOUT (very important to make navbars)
```javascript

// index.js
<Route path="/" element={<App />} > {// Other Routes are subroutes inside the Route of App Component}
      <Route path="/products/:productId" element={<ProductDetail />} />
      <Route path="/categories/:categoryId" element={<Category />} />
      <Route path="/basket" element={<Basket />} />
      <Route path="/checkout" element={<Checkout />} />
</Route>

// App.js
const App = () => {
    return (
        <Layout/>
    )
}

// Layout.js
import { Outlet } from 'react-router-dom';

const Layout = ({categories}) => {
    return (
        <>
            <header>
                My store
            </header>

            <section>
                <nav>
                  . . . . . . . . .  {// navigations}
                </nav>
                <main>
                    <Outlet />   {// All webpages will open in this window, other parts wont be changed}
                </main>
            </section>

            <footer>
                Footer
            </footer>
        </>
    )
}

```
<br>

### Refactoring
```javascript
// index.js
<React.StrictMode>
      <App />
</React.StrictMode>

// App.js
 <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout categories={categories}/>} >
            <Route path="/products/:productId" element={<ProductDetail />} />
            <Route path="/categories/:categoryId" element={<Category />} />
            <Route path="/basket" element={<Basket />} />
            <Route path="/checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </>
```
<br>

### Home Component Route
```javascript
<Route index element={<Home />} />
```
<br>

## Context in React