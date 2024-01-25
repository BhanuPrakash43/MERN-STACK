const buttonContainer = document.querySelector(".buttonContainer");

buttonContainer.addEventListener("click", (e) => {  // e --> we can also write event
    if(e.target.classList.contains("button")){
        console.log(e.target.classList);
        e.target.style.color = "white";
        e.target.style.backgroundColor ="black";
    };
});

