const parallax = ({ elements = [] } = {}) => {

    let firstIteration = true

    // register the base bounding state of each element
    elements = elements.map(e => ({ ...e, baseBounding: e.element.getBoundingClientRect() }))

    return () => {
        const currentScrollY = window.scrollY

        elements.forEach(({ element, offset = 200, transformations, baseBounding }) => {

            // on récupère la position et la hauteur du parent
            const { y, height } = baseBounding

            console.log(height)

            // on calcule la distance qui a été scrollé sur le parent sous forme de pourcentage
            // par exemple le scroll à l'entré du parent vaut 0, le scroll à la sortie du parent vaut 1
            // un décalage est ajouté
            const percent = (currentScrollY - y + offset) / (height + offset * 2)

            // console.log(element, percent)

            console.log(percent)

            /**
             * lors ce que l'on scroll dans la zone du parent alors on anime,
             * lors ce qu'il s'agit du premier appel, on anime malgré tout
             */
            if (/* (firstIteration === true) ||  */(percent >= 0 && percent <= 1)) {
                transformations.forEach(({ min, max, name, value }) => {
                    const x = /* firstIteration === true ? ( percent < 0 ? min : max ) :  */((max - min) * percent) + min

                    console.log('pass')

                    element.style[name] = eval('`' + value + '`')
                })
            }
        })

        firstIteration = false
    }
}

export default parallax