let button = document.querySelectorAll("button");

//DOM Traversal
button.forEach( btn => {

    btn.addEventListener("click", (event) => {
        //Parent till det klickade elementet
        // console.log(event.target.parentElement);

        //Nästa sibling
        // console.log(event.target.nextElementSibling);

        //Föregående sibling
        // console.log(event.target.previousElementSibling);
        

        let box = event.target.parentElement;
        box.style.background = "pink";
        
    })

})
