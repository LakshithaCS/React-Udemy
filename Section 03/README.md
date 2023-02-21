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
    </Routes>
  </BrowserRouter>
</React.StrictMode>;
```
<br>
