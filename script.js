window.addEventListener("scroll", function () {
    const button = this.document.getElementById("pagetop");

    if (window.scrollY > 200) {
        button.classList.add('show');
    } else {
        button.classList.remove('show');
    }
});