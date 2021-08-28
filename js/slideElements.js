export default {
    get(){
        this.container = document.querySelector('.container')
        this.containerSlider = document.querySelector('[data-js="conatinerSlider"]')
        this.btnNext = document.querySelector('[data-js="btnNext"]')
        this.btnPrevious = document.querySelector('[data-js="btnPrevious"]')
        this.slides = document.querySelectorAll('.slide')
        this.slideAmount = document.querySelectorAll('.slide').length
        this.slideLabelContainer = document.querySelector('[data-js="slidLabelContainer"]')
    },
    action() {
        this.container.addEventListener("touchstart", (e) => console.log(e));
        this.btnNext.onclick = () => this.next()
        this.btnPrevious.onclick = () => this.previous()
        this.slideLabels.forEach( ( slideLabel, idx) => {
            slideLabel.onclick = () => this.renderWithSliderLabel(idx)
        })
    },
    createLabelSlider() {
        this.slides.forEach( ( slide , idx ) => {
            const slideLabel = document.createElement('li')
            if (!idx)  {
                slideLabel.classList.add('active')
            }
            this.slideLabels.push(slideLabel)
            this.slideLabelContainer.appendChild(slideLabel)
        });
    }
}