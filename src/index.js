import './index.css'
import png from './pin.png'
import svg from './pin.svg'
import hello from './hello'

hello('world')

const component = (src) => {
    let e = document.createElement('img')
    e.src = src

    return e
}

document.body.appendChild(component(png))
document.body.appendChild(component(svg))
document.body.innerHTML += '<h1>Hello world</h1>'

if (module.hot) {
    module.hot.accept('./hello.js', () => {
        console.log('Accepting the updated hello module')
        hello('world')
    })
}