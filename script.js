class ImageCarousel {
    constructor() {
        this.container = getElementById("container");
        this.imageScroller = addContainer("image-scroller snaps-inline");
        this.renderPage();
    }
    #addImages() {
        imageURLs.forEach((imageURL) => 
            this.imageScroller.appendChild(addImageContainer(imageURL)
        ))
    }
    #renderScroller() {
        this.container.appendChild(this.imageScroller);
    }
    renderPage() {
        this.#addImages();
        this.#renderScroller();
    }
}

const imageCarousel = new ImageCarousel();