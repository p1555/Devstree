//console.log("hello")
const images = [
    { id: 1, img: './images/html.png' },
    { id: 2, img: './images/c++.png' },
    { id: 3, img: './images/js.png' },
    { id: 4, img: './images/java.jpg' },
    { id: 5, img: './images/python.png' },
    { id: 6, img: './images/css.png' }
]
//console.log(images)
const cardcontainer = document.getElementById('card-container');
const restart = document.getElementById('restart')
let movedisplay = document.querySelector(".move");
let timedisplay = document.getElementById('showtime')
let res = document.getElementById('result');
let toggle = []
let move = 0, matches = 0;
let lockboard = false
let timeinterval;
let gamend = false
let cardimgs = [...images, ...images]

function shuffle() {
    cardimgs.sort(() => Math.random() - 0.5);
};

function getcards() {
  cardcontainer.innerHTML = ''
    shuffle();
    // movedisplay.textContent = `Moves:${move}`;
    // res.textContent = `🧮Score: 0/${images.length}`;        
    startTimer()
    cardimgs.forEach((cardData, index) => {
        const card = document.createElement('div')
        card.classList.add("card")
        card.setAttribute('data-id', cardData.id);

        card.innerHTML = `<img src="./images/back.jpg" class="background-image" alt="backgroung image">
        <img src ="${cardData.img}" class="card-image" alt="front image">`

        cardcontainer.appendChild(card);
        card.addEventListener("click", flip)
    });
}
function flip() {
    if (lockboard || gamend) {
        return [];

    }
    if (this === toggle[0]) {
        return []
    }
    // console.log(this);
    this.classList.add("flipped");

    
    toggle.push(this)
    //console.log("clicked:", this);
    if (toggle.length === 2) {
        lockboard = true
        move++;
        movedisplay.textContent = `Moves:${move}`;
        match();
    }
}
function match() {
    const [card1, card2] = toggle;
    const id1 = card1.getAttribute("data-id");
    const id2 = card2.getAttribute("data-id");

    if (id1 === id2) {
        matches++;
        setTimeout(()=>{
        card2.style.visibility="hidden";
        card1.style.visibility="hidden"
        },800);
        clear();
        updateScore();
         
        if (matches === images.length) {
            
            clearInterval(timeinterval);
           
            setTimeout(() =>
                Swal.fire({
                    title: `You won in ${move} moves! 🎉`,
                    width: 600,
                    padding: "3em",
                    color: "#716add",
                    background: "#fff url(/images/trees.png)",
                    backdrop: `
                            rgba(0,0,123,0.4)
                            url("/images/nyan-cat.gif")
                            left top
                            no-repeat`
                }), 1000);
        }
    } else {
        setTimeout(() => {
            card1.classList.remove('flipped');
            card2.classList.remove('flipped');
            
            clear();
        }, 1000);
    }
}
let time = 60
function startTimer() {
    clearInterval(timeinterval);
    time = 60;
    gamend=false
    timeinterval = setInterval(() => {
        if (time < 0) {
            clearInterval(timeinterval);
            gamend=true
            Swal.fire("⏰ Time is Over!", "Try again.", "warning");
            return;
        }
        let min = Math.floor(time / 60);
        let sec = time % 60;
        sec = sec < 10 ? `0${sec}` : sec;
        timedisplay.textContent = `⏱ Time Left: ${min}:${sec}`;
        time--;
    },
        1000);
}
function updateScore() {
    res.textContent = `🧮Score: ${matches}/${images.length}`;
}
function clear() {
    [toggle, lockboard] = [[], false];
}
restart.addEventListener('click', () => {
    Swal.fire({
        title: "Do you want to Restart the Game?",
        showCancelButton: true,
        confirmButtonText: "Yes",
        denyButtonText: `No`
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire("success!", "", "success");
            move = 0;
            matches = 0
            movedisplay.textContent = `Moves:${move}`;
            res.textContent = `🧮Score: 0/${images.length}`;
            clear();
            //startTimer()
            getcards();
        }
    });
});
getcards()
