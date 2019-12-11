document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".scandal").forEach((scandal, index) => {
        if(index % 2 == 0)
            scandal.classList.add("left");
        else
            scandal.classList.add("right");
        }
    );
});
