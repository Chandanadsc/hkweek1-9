function switchOff()
    {
        document.getElementById("bulbImage").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";

        document.getElementById("catImage").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
        document.getElementById("switchStatus").textContent = "SwitchedOff";
        document.getElementById("offswitch").style.backgroundColor = "#cbd2d9";
        document.getElementById("onswitch").style.backgroundColor = "#22c55e";


    }
function switchOn()
    {
        document.getElementById("bulbImage").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";

        document.getElementById("catImage").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
        document.getElementById("switchStatus").textContent = "SwitchedOn";
        document.getElementById("onswitch").style.backgroundColor = "#cbd2d9";
        document.getElementById("offswitch").style.backgroundColor = "#e12d39";


    }

    