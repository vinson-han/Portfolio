
let i =0,text
text = "Full Stack Web Developer."


function typing(){

    if(i < text.length){
        document.getElementById("roles").innerHTML += text.charAt(i)
        console.log(text.charAt(i))
        i++;
        setTimeout(typing,50);
    }
}

typing();