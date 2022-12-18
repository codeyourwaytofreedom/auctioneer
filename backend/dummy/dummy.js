
const categories = [];

for (let i = 0; i < 10; i++) {
    categories.push(
        {
            item_id:`car${i}`,
            images: [
                "http://localhost:9000/car0.jpg",
                "http://localhost:9000/car1.jpg",
                "http://localhost:9000/car2.jpg",
                "http://localhost:9000/car3.jpg"
            ]
        }
    )
    categories.push(
        {
            item_id:`furniture${i}`,
            images: [
                "http://localhost:9000/furniture0.jpg",
                "http://localhost:9000/furniture1.png",
                "http://localhost:9000/furniture2.png",
                "http://localhost:9000/furniture3.png"
            ]
        }
    )
    categories.push(
        {
            item_id:`jewelry${i}`,
            images: [
                "http://localhost:9000//jewelry0.png",
                "http://localhost:9000/jewelry1.png",
                "http://localhost:9000/jewelry2.png",
                "http://localhost:9000/jewelry3.png"
            ]
        }
    )
    categories.push(
        {
            item_id:`handcraft${i}`,
            images: [
                "http://localhost:9000//handcraft0.png",
                "http://localhost:9000/handcraft1.png",
                "http://localhost:9000/handcraft0.png",
                "http://localhost:9000/handcraft1.png"
            ]
        }
    )
}

module.exports = {
  categories
}
