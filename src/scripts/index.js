import Parallax from './parallax'
import './scroll-out'

const parallax = Parallax({
    elements: [ {
            element: document.querySelector('#landing-media-img'),
            name: 'media img',
            offset: 300,
            transformations: [
                { min: 0, max: 1, name: 'transform', value: 'scale(${1 + (x * 3)})' }
            ],
        }, {
            element: document.querySelector('#landing'),
            name: 'landing',
            offset: 100,
            transformations: [
                { min: 0, max: 1, name: 'opacity', value: '${1 - (x)}' },
            ]
        }, {
            element: document.querySelector('.landing-content'),
            transformations: [
                { min: 0, max: 1, name: 'transform', value: 'translate(0, ${x * 350}px)' }
            ]
        }
    ]
})

document.addEventListener('DOMContentLoaded', () => {
    console.log('ok')
    parallax(true)
    document.addEventListener('scroll', parallax, {
        passive: true
    })
})
