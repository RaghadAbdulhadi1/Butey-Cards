class ImageCarousel {
    constructor() {
        this.slideContainer = getElementById("container");
        this.slide = addContainer("image-scroller");
        this.urlsContainer = addContainer("urls-inline");
        this.slideControls = addContainer("slides-control");
        this.rightButton = buttonControls[0];
        this.leftButton = buttonControls[1];
        this.slider();
    }
    #addSlider() {
        imageURLs.forEach((imageURL) => 
            this.slide.appendChild(addImageContainer(imageURL)
        ))
        this.slideContainer.appendChild(this.slide);
    }
    #addSlideControls() {
        this.slideControls.append(this.leftButton, this.rightButton);
        this.slideContainer.appendChild(this.slideControls);
    }
    moveSlider() {
        const getSlides = () => getAllClasses(".image-element");
        let slides = getSlides();
        let index = 1;
        let slideId;
        const interval = 10000;
        const firstClone = slides[0].cloneNode(true);
        const lastClone = slides[slides.length - 1].cloneNode(true);
        firstClone.id = "first-clone";
        lastClone.id = "last-clone";
        
        this.slide.appendChild(firstClone);
        this.slide.prepend(lastClone);

        const slideWidth = slides[index].clientWidth;
        this.slide.style.transform = `translateX(${-slideWidth * index}px)`;
        const moveToNextSlide = () => {
            slides = getSlides();
            if(index >= slides.length - 1) return;
            index++;
            this.slide.style.transform = `translateX(${-slideWidth * index}px)`;
            this.slide.style.transition = '0.7s'
        }
        const moveToPreviousSlide = () => {
            slides = getSlides();
            if(index <= 0) return;
            index--;
            this.slide.style.transform = `translateX(${-slideWidth * index}px)`;
            this.slide.style.transition = '0.7s'
        }
        const startSlide = () => {
            slideId = setInterval(() => {
                moveToNextSlide();
            }, interval)
        }
        this.slide.addEventListener('transitionend', () => {
            slides = getSlides();
            if(slides[index].id === firstClone.id){
                this.slide.style.transition = 'none';
                index = 1;
                this.slide.style.transform = `translateX(${-slideWidth * index}px)`;
            }
            if(slides[index].id === lastClone.id){
                this.slide.style.transition = 'none';
                index = slides.length - 2;
                this.slide.style.transform = `translateX(${-slideWidth * index}px)`;
            }
        })
        this.slideContainer.addEventListener('mouseenter', () => {
            clearInterval(slideId)
        })
        this.slideContainer.addEventListener('mouseleave',startSlide)
        startSlide();
        this.rightButton.addEventListener('click', moveToNextSlide);
        this.leftButton.addEventListener('click', moveToPreviousSlide);
    }
    slider() {
        this.#addSlider();
        this.#addSlideControls();
        this.moveSlider();
    }
}

const imageCarousel = new ImageCarousel();