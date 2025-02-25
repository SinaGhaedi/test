const box = document.getElementById("preview")
const body = document.getElementById("body")


const red = document.getElementById("btn-red")
const red_2 = document.getElementById("btn-red1")
const blue = document.getElementById("btn-blue")
const blue2 = document.getElementById("btn-blue1")
const yellow = document.getElementById("btn-yellow")
const yellow2 = document.getElementById("btn-yellow1")
const green = document.getElementById("btn-green")
const green2 = document.getElementById("btn-green1")


const mosbat = document.getElementById("btn-mosbat")
const manfi = document.getElementById("btn-manfi")


const cls = document.getElementById("clear")
const description = document.getElementById("description")
const theme = document.getElementById("theme")


let temp_color = ""
let status_cal = ""
let theme_status = "light mode"


red.addEventListener("click", () => {
    box.style.backgroundColor = "red"
    temp_color = "red"
    status_cal = ""
    description.innerHTML = "RED"
    description.style.color = "red"
})

blue.addEventListener("click", () => {
    box.style.backgroundColor = "blue"
    temp_color = "blue"
    status_cal = ""
    description.innerHTML = "BLUE"
    description.style.color = "blue"
})

yellow.addEventListener("click", () => {
    box.style.backgroundColor = "yellow"
    temp_color = "yellow"
    status_cal = ""
    description.innerHTML = "YELLOW"
    description.style.color = "yellow"
})

green.addEventListener("click", () => {
    box.style.backgroundColor = "green"
    temp_color = "green"
    status_cal = ""
    description.innerHTML = "GREEN"
    description.style.color = "green"
})

theme.addEventListener("click", () => {
    if (theme_status == "light mode") {
        theme.style.backgroundColor = "white"
        theme.style.color = "black"
        body.style.backgroundColor = "black"
        theme_status = "dark mode"
    }
    else if (theme_status == "dark mode") {
        theme.style.backgroundColor = "black"
        theme.style.color = "white"
        body.style.backgroundColor = "white"
        theme_status = "light mode"
    }
})

red_2.addEventListener("click", () => {
    if (status_cal == "jam") {
        if (temp_color == "blue") {
            box.style.backgroundColor = "purple"
            description.innerHTML = "PURPLE"
            description.style.color = "purple"
        }
        else if (temp_color == "green") {
            box.style.backgroundColor = "brown"
            description.innerHTML = "BROWN"
            description.style.color = "brown"
        }
        else if (temp_color == "yellow") {
            box.style.backgroundColor = "orange"
            description.innerHTML = "ORANGE"
            description.style.color = "orange"
        }
        else if (temp_color == "red") {
            box.style.backgroundColor = "red"
            description.innerHTML = "RED"
            description.style.color = "red"
        }
    }
    else if (status_cal == "menha") {
        if (temp_color == "red") {
            box.style.backgroundColor = "black"
            description.innerHTML = "BLACK"
            description.style.color = "gray"
        }
        if (temp_color == "yellow") {
            box.style.backgroundColor = "green"
            description.innerHTML = "GREEN"
            description.style.color = "green"
        }
    }
})

blue2.addEventListener("click", () => {
    if (status_cal == "jam") {
        if (temp_color == "red") {
            box.style.backgroundColor = "purple"
            description.innerHTML = "PURPLE"
            description.style.color = "purple"
        }
        else if (temp_color == "green") {
            box.style.backgroundColor = "aqua"
            description.innerHTML = "AQUA"
            description.style.color = "aqua"
        }
        else if (temp_color == "yellow") {
            box.style.backgroundColor = "green"
            description.innerHTML = "GREEN"
            description.style.color = "green"
        }
        else if (temp_color == "blue") {
            box.style.backgroundColor = "blue"
            description.innerHTML = "BLUE"
            description.style.color = "blue"
        }
    }
    else if (status_cal == "menha") {
        if (temp_color == "blue") {
            box.style.backgroundColor = "black"
            description.innerHTML = "BLACK"
            description.style.color = "gray"
        }
    }

})

yellow2.addEventListener("click", () => {
    if (status_cal == "jam") {
        if (temp_color == "blue") {
            box.style.backgroundColor = "green"
            description.innerHTML = "GREEN"
            description.style.color = "green"
        }
        else if (temp_color == "green") {
            box.style.backgroundColor = "greenyellow"
            description.innerHTML = "GREEN-YELLOW"
            description.style.color = "greenyellow"
        }
        else if (temp_color == "red") {
            box.style.backgroundColor = "orange"
            description.innerHTML = "ORANGE"
            description.style.color = "orange"
        }
        else if (temp_color == "yellow") {
            box.style.backgroundColor = "yellow"
            description.innerHTML = "YELLOW"
            description.style.color = "yellow"
        }
    }
    else if (status_cal == "menha") {
        if (temp_color == "yellow") {
            box.style.backgroundColor = "black"
            description.innerHTML = "BLACK"
            description.style.color = "gray"
        }
        if (temp_color == "green") {
            box.style.backgroundColor = "red"
            description.innerHTML = "RED"
            description.style.color = "red"
        }
        if (temp_color == "red") {
            box.style.backgroundColor = "green"
            description.innerHTML = "GREEN"
            description.style.color = "green"
        }
    }

})

green2.addEventListener("click", () => {
    if (status_cal == "jam") {
        if (temp_color == "blue") {
            box.style.backgroundColor = "aqua"
            description.innerHTML = "AQUA"
            description.style.color = "aqua"
        }
        else if (temp_color == "red") {
            box.style.backgroundColor = "brown"
            description.innerHTML = "BROWN"
            description.style.color = "brown"
        }
        else if (temp_color == "yellow") {
            box.style.backgroundColor = "greenyellow"
            description.innerHTML = "GREEN-YELLOW"
            description.style.color = "greenyellow"
        }
        else if (temp_color == "green") {
            box.style.backgroundColor = "green"
            description.innerHTML = "GREEN"
            description.style.color = "green"
        }
    }
    else if (status_cal == "menha") {
        if (temp_color == "green") {
            box.style.backgroundColor = "black"
            description.innerHTML = "BLACK"
            description.style.color = "gray"
        }
        if (temp_color == "yellow") {
            box.style.backgroundColor = "red"
            description.innerHTML = "RED"
            description.style.color = "red"
        }
    }

})

mosbat.addEventListener("click", () => {
    status_cal = "jam"
})

manfi.addEventListener("click", () => {
    status_cal = "menha"
})

cls.addEventListener("click", () => {
    status_cal = ""
    temp_color = ""
    box.style.backgroundColor = "white"
    description.innerHTML = "WHITE"
    description.style.color = "gray"
})