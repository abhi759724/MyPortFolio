// home = 80px;
// var skillSec = document.querySelectorAll('.scrollNav');
// for (var item of skillSec) {
//     item.addEventListener('click', scrollPx);
//     function scrollPx(e) {
//         let targetScrollVal = e.target.dataset.value;
//         let currScrollVal = 0;
//         var scrollInterval = setInterval(function () {
//             if (currScrollVal == targetScrollVal) {
//                 clearInterval(scrollInterval)
//             }
//             currScrollVal += 10;
//             window.scrollBy(0, 50);
//         }, 10);

//     }
// }

// scroll to section

let page = document.querySelectorAll('.navig a');
// console.log(page);
for(let i = 0 ; i < page.length ; i++){
    page[i].addEventListener('click', function(event){
        event.preventDefault();
        // const targetContent = this.textContent.trim().toLowerCase();
        const target = document.getElementById(this.textContent.trim().toLowerCase());
        // console.log(target);
        const interval = setInterval(function(){
            const targetSize = target.getBoundingClientRect();
            if(targetSize.top <= 0){
                clearInterval(interval);
                return;
            }
            window.scrollBy(0, 50)
        }, 10);
    });
}

// auto-fill skill progress bar

let progressBars = document.querySelectorAll('.skill_parent_div>div');
let skillsContainer = document.getElementById('skills-container');
window.addEventListener('scroll', checkScroll);
let animationDone = false;



function initialiseBar(){
    for(let i of progressBars){
        i.style.width = 0+'%';
    }
}
initialiseBar();

function fillBars(){
    for(let i of progressBars){
        let targetWidth = i.getAttribute('data-bar-width');
        let currBarWidth = 0;
        let interval = setInterval(function(){
            if(currBarWidth > targetWidth){
                clearInterval(interval);
                return;
            }
            currBarWidth++;
            i.style.width = currBarWidth+'%';
        }, 3)
    }
}


function checkScroll(){
    let target = skillsContainer.getBoundingClientRect();
    if(!animationDone && target.top <= window.innerHeight){
        animationDone = true;
        fillBars();
    }
    else if( target.top > window.innerHeight){
        animationDone = false;
        initialiseBar();
    }
}


