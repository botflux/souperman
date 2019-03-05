import Parallax from './parallax'

const parallax = Parallax({
    elements: [ {
            element: document.querySelector('#landing-media-img'),
            name: 'media img',
            offset: 300,
            transformations: [
                { min: 0, max: 1, name: 'transform', value: 'scale(${1 + (Math.round(x * 100) / 100)})' }
            ],
        }, {
            element: document.querySelector('#landing'),
            name: 'landing',
            offset: 100,
            transformations: [
                { min: 0, max: 1, name: 'opacity', value: '${1 - (Math.round(x * 100) / 100)}' },
            ]
        }, {
            element: document.querySelector('.landing-content'),
            transformations: [
                { min: 0, max: 1, name: 'transform', value: 'translate(0, ${Math.round(x * 350 * 100) / 100}px)' }
            ]
        }
    ]
})

parallax(true)
document.addEventListener('scroll', parallax, {
    passive: true
})