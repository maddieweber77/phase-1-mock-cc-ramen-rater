// write your code here
let currentRamen;

let ramenURL = 'http://localhost:3000/ramens'

fetch(ramenURL)
.then(res => res.json())
.then(results => {
buildRamenSite(results);
ramenShowcase(results[0]);
submitForm();
})

let ramenImagesContainer = document.getElementById('ramen-menu');


function buildRamenSite(ramen) {

    ramen.forEach(item => {
        let ramenPhotos = document.createElement('img');
        ramenPhotos.src = item.image;
        ramenImagesContainer.append(ramenPhotos)

        ramenPhotos.addEventListener('click', () => {
            ramenShowcase(item)
        })
    }) 
    }

    let ramenShowcaseContainer = document.getElementById("ramen-detail");

    let ramenShowImg = document.querySelector('.detail-image');
    let ramenShowName = document.querySelector('.name');
    let ramenShowRestaurant = document.querySelector('.restaurant');

    let rating = document.getElementById('rating-display')
    let comment = document.getElementById('comment-display')

    function ramenShowcase(showRamen) {

        currentRamen = showRamen

        ramenShowImg.src = showRamen.image;
        ramenShowName.textContent = showRamen.name;
        ramenShowRestaurant.textContent = showRamen.restaurant;
        rating.textContent=showRamen.rating;
        comment.textContent=showRamen.comment;

        ramenShowcaseContainer.append(ramenShowImg, ramenShowName, ramenShowRestaurant)
    }

    function submitForm(e) {
        let submitPhoto = document.getElementById('new-ramen');
        submitPhoto.addEventListener('submit', (event) => {
            event.preventDefault();
            //link input image to 
            let RamenSubmitImg = document.createElement('img')
            RamenSubmitImg.src = event.target.image.value;
            ramenImagesContainer.append(RamenSubmitImg)
            submitPhoto.reset();

        })
    }