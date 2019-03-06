import "@fortawesome/fontawesome-free/css/all.min.css";

if (window.innerWidth >= 900) {
    import('./scroll-out.js')
        .then(() => console.log('scroll out imported'))
}

if (window.innerWidth >= 900) {
    import('./parallax-config.js')
        .then(() => console.log('parallax imported'))
}