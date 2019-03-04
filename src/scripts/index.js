import Parallax from './parallax'

const parallax = Parallax({
    elements: [ {
            element: document.querySelector('#landing-media-img'),
            name: 'media img',
            offset: 300,
            transformations: [
                { min: 0, max: 1, name: 'transform', value: 'scale(${1 + (x * 3)})' }
            ],
        }, {
            element: document.querySelector('.landing-media'),
            name: 'media',
            transformations: [
                { min: 0, max: 1, name: 'transform', value: 'translate(0, -${x * 1500}px)'}
            ],
            forceHeight: true
        }, {
            element: document.querySelector('#landing'),
            name: 'landing',
            offset: 100,
            transformations: [
                { min: 0, max: 1, name: 'opacity', value: '${1 - x}' },
            ]
        }
    ]
})

document.addEventListener('DOMContentLoaded', () => {
    console.log('ok')
    // parallax(true)
    // document.addEventListener('scroll', parallax, {
    //     passive: true
    // })
})
