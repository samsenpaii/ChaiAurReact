# react notes

## diffrence between the create react app and react app with vite

The react with vite act like frameworl(military) which follows strict rules. When the react app ius created using the create react app it acts like a liblary(cool dude) no stric naming and all

## custom react - what react dose behind the scens 

```javascript 
function customRender(reactElement, container){
    /*
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)

    container.appendChild(domElement)
    */

    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
        if (prop === 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domElement)
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
}

const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer)
```
here bsically the html Element to be added to the web is been converted into tree like stucture having its props and children(innerHTML) all features written and a function like render() , renders all the elemnets on the div with root as its 'id'.


# onclick always takes function 
```jsx

<button onClick={setColor('red')}></button>
// this above suntax is wrong a s the onclick expects function if you execute a function there then there will be syntax issue 
// the correct way is 

<button onClick={()=> setcolor('red')}>red</button>

```
## key in ract components inside loop
while doing loop using map in jsx to repeate a component , we must add key in the components to imnprove the performance as the react dose not know that it is using the same component again and again .

## create index.js for easy compoents access
import all the components that are been created inside the 'index.js' file and export them ffrom there like 
import InputBox from './InputBox.jsx'

export defult {InputBox}

## useId() hook 
used to generate random id , which can be used in lable so that each lable is unique. Must not be used for the data that is been used to assign a key for each data, as per doc.

## Link from react router Dom 
used insted of "a" tag as it refreshes all the page and in react we dont refresh page

## Outlet in react-router-dom
```javascript
        <Header/>
        <Outlet/>
        <Footer/>
```
Outlet is used in order to make the above and below components same constant and change the inside componets that are been updated at the main.jsx in the following format

```javascript
    const router = createBrowserRouter([
  {
    path: '/',
    element:<Layout/>,
    children: [
      // {
      //   path:"",
      //   element:<Home/>
      // },
      {
        path:"samarth",
        element:<About/>
      }
    ]
  }
])
```

## the route can be created in two ways 

```javascript
  const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      
    </Route>
  )
)

// other way is 

const router = createBrowserRouter([
  {
    path: '/',
    element:<Layout/>,
    children: [
      {
        path:"",
        element:<Home/>
      },
      {
        path:"About",
        element:<About/>
      },
      {
        path:"Contact",
        element:<Contact/>
      }
    ]
  }
])

```

## to accses the data in the url 

```javascript
import { useParams } from 'react-router-dom' 

const {userId} = useParams()

// this below is the part needed to be done at the main.jsx

<Route path='User/:userId' element={<User/>}/>
```

## during a api call to be done when a pade is loaded 
when we use the normal useEffect hook to call an api to get data when a page is loaded 
then it is a bit slow and not fully optimised 
so to optimise it fully we used 
```javascript
export const GithubInfoLoader = async () => {
    const response = await fetch("https://api.github.com/users/samsenpaii")
    return response.json()
}
```
and in the Route in main.jsx we mention this method in Loader attribute foe the perticular Route like 
```javascript
<Route
      loader={GithubInfoLoader} 
      path='Github'
      element={<Github/>}/>
      ```
      