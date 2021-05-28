
let i =0,text
text = "I'm a Full Stack Web Developer."


function typing(){

    if(i < text.length){
        document.getElementById("roles").innerHTML += text.charAt(i)
        i++;
        setTimeout(typing,50);
    }
}

typing();


// function redeemShoot() {
//     return new Promise((resolve) =>  {
//       document.querySelector('[aria-label="Points Balance"]').click();
//       setTimeout(() => {
//         document.querySelector('#channel-points-reward-center-body button').click();
//         setTimeout(() => {
//           document.querySelector('#channel-points-reward-center-body button').click();
//           setTimeout(() => {
//  g
//           }, 700);
//         }, 300)
//       }, 300);
//     });
//     }
//     promise = redeemShoot()
//     for (i = 0; i < 100; i += 1) { promise = promise.then(() => redeemShoot()) }