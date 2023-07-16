const getcolor = () => {
    const randomnumber = Math.floor(Math.random()*16777215);
    const hexnumber = "#"+randomnumber.toString(16);
    console.log(hexnumber)
    document.body.style.backgroundColor = hexnumber;
    document.getElementById("colorcode").innerText = hexnumber;

    navigator.clipboard.writeText(hexnumber)
}

document.getElementById("btn").addEventListener('click',getcolor)

// init call
getcolor();