console.log(document.getele)
let n = document.getElementById("outp").childElementCount
function getP(){
    let x = document.getElementById("Pval").value
    n++
    createP(x)
}


function createP(data){
    let template = `<div class="P P${n}"> <h1 name="${n}" id="Phead${n}" class="heady" ></h1> <div class="disp"><ul name="S${data}" id="S${n}"></ul> </div> </div>`

    let reg = document.createElement('div')
    let newPlay = `<option name="${n}">${data}</option>`
    let opt = document.createElement("option")
    reg.innerHTML = template
    document.getElementById("outp").appendChild(reg)
    document.getElementById(`Phead${n}`).innerHTML = data
    document.getElementById("play").appendChild(opt)
    document.getElementById("play").innerHTML = newPlay
}

function addScores(){
    
    let data = document.getElementById("play").value
    data = document.getElementsByName(`S${data}`)
    let score = document.getElementById("Sco").value
    let scoreReady = score.split(" ")

    let temp = document.createElement("li")
    for (let i = 0; i < scoreReady.length; i++) {
        temp.innerHTML = scoreReady[i]
        data[0].appendChild(temp)
        
    }
}