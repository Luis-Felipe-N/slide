import elements from './slideElements.js'

export default {
    index: 0,
    slideLabels: [],
    start() {
        elements.get.call(this)
        elements.createLabelSlider.call(this)
        elements.action.call(this)
    },
    render() {
        this.containerSlider.style.transform = `translateX(${-(this.index * 100)}%)`
        this.changeActivelabel()
    },
    next() {
        this.index >= ( this.slideAmount - 1) ? this.index = 0 : this.index ++
        this.render()
    },
    previous() {
        this.index > 0 ? this.index-- : this.index = ( this.slideAmount - 1)
        this.render()
    },
    renderWithSliderLabel( idx ) {
        this.index = idx
        this.render()
    },
    changeActivelabel() {
        this.slideLabels.forEach( slideLabel => {
            slideLabel.classList.remove('active')
        })
        this.slideLabels[this.index].classList.add('active')
    }
}