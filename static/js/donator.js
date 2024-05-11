window.addEventListener("resize", () => {
    var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
    var imgElement = document.getElementById("donator-banner");
    console.log(viewportWidth)
    if (viewportWidth < 600) {
        imgElement.src = "https://donator.cz/SVG/plugin1367banner/1505.svg"
    } else {
        imgElement.src = "https://donator.cz/SVG/plugin1366banner/1505.svg"
    }
})