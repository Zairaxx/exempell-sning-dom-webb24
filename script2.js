let button = document.querySelectorAll("button");

//DOM Traversal
button.forEach( btn => {

    btn.addEventListener("click", (event) => {
        console.log(event.target.parentElement);

        let box = event.target.nextElementSibling;
        box.nextElementSibling.style.background = "pink";
        
    })

})
