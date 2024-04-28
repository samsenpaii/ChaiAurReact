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