class Carousel {
  constructor() {
    this.container = getElementById("container");
    this.carouselContainer = this.addCarouselContainer();
    this.displayCarousel();
    this.isPressedDown = false;
    this.cursorXSpace;
    this.trackMouse();
    this.mouseMove();
    this.mouseUp();
  }
  addCarouselContainer() {
    return addContainer("carousel-container snaps-inline");
  }
  #addImages() {
    imageURLs.forEach((imageURL) =>
      this.carouselContainer.appendChild(addImageContainer(imageURL))
    );
  }
  #renderScroller() {
    this.container.appendChild(this.carouselContainer);
  }
  displayCarousel() {
    this.#addImages();
    this.#renderScroller();
  }
  trackMouse() {
    this.container.addEventListener("mousedown", (e) => {
      this.isPressedDown = true;
      this.cursorXSpace = e.offsetX - this.carouselContainer.offsetLeft;
    });
  }
  mouseUp() {
    window.addEventListener("mouseup", (e) => {
      this.isPressedDown = false;
    });
  }
  mouseMove() {
    this.container.addEventListener("mousemove", (e) => {
      if (!this.isPressedDown) return;
      e.preventDefault();
      this.carouselContainer.style.left = `${e.offsetX - this.cursorXSpace}px`;
      this.boundCards();
    });
  }
  boundCards() {
    const container_rect = this.container.getBoundingClientRect();
    const carouselContainer_rect =
      this.carouselContainer.getBoundingClientRect();
    if (parseInt(this.carouselContainer.style.left) > 0) {
      this.carouselContainer.style.left = 0;
    } else if (container_rect.right > carouselContainer_rect.right) {
      this.carouselContainer.style.left = `-${
        carouselContainer_rect.width - container_rect.width
      }px`;
    }
  }
}

const carousel = new Carousel();
