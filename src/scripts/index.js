import Parallax from './parallax'

const parallax = Parallax({
    elements: [ {
            element: document.querySelector('#landing-media-img'),
            offset: 300,
            transformations: [
                { min: 0, max: 1, name: 'transform', value: 'scale(${1 + (x * 3)})' }
            ],
        }, {
            element: document.querySelector('.landing-media'),
            transformations: [
                { min: 0, max: 1, name: 'transform', value: 'translate(0, -${x * 1500}px)'}
            ]
        }, {
            element: document.querySelector('#landing'),
            offset: 100,
            transformations: [
                { min: 0, max: 1, name: 'opacity', value: '${1 - x}' },
            ]
        }
    ]
})
// parallax(true)
document.addEventListener('scroll', parallax, {
    passive: true
})