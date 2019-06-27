class Carousel {
    constructor(element) {
        this.element = element;
        this.carouselImages = element.querySelectorAll('.carousel-img');
        this.carouselImages = Array.from(this.carouselImages).map(image => {
            return new CarouselImage(image);
        });

        this.leftButton = element.querySelector('.left');
        this.rightButton = element.querySelector('.right');
        this.selectedIndex = 0;
        this.carouselImages[this.selectedIndex].select();

        this.rightButton.addEventListener('click', () => {
            clearInterval(this.interval);
            this.next();
        });
        this.leftButton.addEventListener('click', () => {
            clearInterval(this.interval);
            this.previous();
        });
        this.interval = setInterval(() => this.next(), 3000);
    }

    next() {
        this.selectedIndex = (this.selectedIndex + 1) % this.carouselImages.length
        this.carouselImages[this.selectedIndex].select();
    }

    previous() {
        this.selectedIndex = (this.selectedIndex - 1 + this.carouselImages.length) % this.carouselImages.length
        this.carouselImages[this.selectedIndex].select();
    }
}

class CarouselImage {
    constructor(element) {
        this.element = element;

        this.data = this.element.dataset.item;
        
        this.itemContent = document.querySelector(`.carousel-content[data-item="${this.data}"]`);
        
        this.itemContent = new CarouselContent(this.itemContent);
    }

    select() {
        let carouselImages = document.querySelectorAll('.carousel-img');

        carouselImages.forEach(image => {
            image.classList.remove('active');
        });

        // nextItem = this.element[`${this.data}`]

        this.element.classList.add('active');

        // if()

        this.itemContent.select();
    }
}

class CarouselContent {
    constructor(element) {
        this.element = element;
    }

    select() {
        let carouselContent = document.querySelectorAll('.carousel-content');

        carouselContent.forEach(item => {
            item.classList.remove('active');
        });

        this.element.classList.add('active');
    }
}

// let carousel = document.querySelectorAll('.carousel-img');
// carousel.forEach(item => new CarouselImage(item));

// carousel.setInterval()

let carousel = document.querySelectorAll('.carousel').forEach(carousel => new Carousel(carousel));
