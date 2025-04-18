console.log(document.getele)
let tracker = new Map
// reconstruct()
try{
    localStorage.getItem("n")
}
catch{
 let n = document.getElementById("outp").childElementCount   
}
let n = localStorage.getItem("n")
function getP(){
    let x = document.getElementById("Pval").value
    n++
    createP(x)
    document.getElementById("Pval").value = ""
    localStorage.setItem("n", n)
}


function createP(data){
    tracker.set(data)
    let template = `<div class="P P${n}"> <h1 name="${n}" id="Phead${n}" class="red" ></h1> <div class="disp"> <ul name="G${data}" id="S${n}" ></ul> <ul name="S${data}" id="S${n}" class="lis"></ul> </div> </div>`
    let fill = document.getElementById("play")
    let fill2 = document.getElementById("play2")
    let reg = document.createElement('div')
    
    let newPlay = `<option name="${n}">${data}</option>`
    let opt = document.createElement("option")
    let opt2 = document.createElement("option")
    reg.innerHTML = template
    opt.innerHTML = newPlay
    opt2.innerHTML = newPlay
    document.getElementById("outp").appendChild(reg)
    document.getElementById(`Phead${n}`).innerHTML = data
    fill.appendChild(opt)
    fill2.appendChild(opt2)
    save()
}


function print(){
    document.getElementById("outp").innerHTML = localStorage.getItem("save")
    document.getElementById("play").innerHTML  = localStorage.getItem("gameList")
    document.getElementById("play2").innerHTML  = localStorage.getItem("gameList")
}

function save(){
    localStorage.setItem("gameList", document.getElementById("play").innerHTML)
    localStorage.setItem("save", document.getElementById("outp").innerHTML)
    localStorage.setItem("Vtracker", Array.from(tracker.values()))
    console.log(localStorage.getItem("Vtracker"))
}
function clears(){
    console.log("red")
    document.getElementById("outp").outerHTML = '<div class="out" id="outp"> </div>'
    document.getElementById("play").outerHTML = '<select id="play"> </select>'
    document.getElementById("play2").outerHTML = '<select id="play2"> </select>'
    localStorage.setItem("save", '')
    localStorage.setItem("n", 0)
    localStorage.setItem("Vtracker", '')
    tracker = new Map()
    n = 0
}
print()
function addGame(){

    let data = document.getElementById("play2").value
    let Gdata = document.getElementsByName(`G${data}`)
    let game = document.getElementById("Gselect").value
    let temp = document.createElement("li")
    if(Gdata[0].childElementCount == 3){
        return
    }
    temp.innerHTML = game
    console.log(temp)
    Gdata[0].appendChild(temp)
    try{
            let yes = Array.from(tracker.get(data))
            yes.push(game)
            tracker.set(data, yes)
    }
    catch{
        tracker.set(data, [game])
    }
    console.table(tracker)
    console.log(n)
    save()
}

function addScores(){
    let data = document.getElementById("play").value
    let Sdata = document.getElementsByName(`S${data}`)
    let score = document.getElementById("Sco").value
    console.log(score)
    let scoreReady = score.split(",")
    console.log(scoreReady)
    let temp = ""
    for (let i = 0; i < scoreReady.length; i++) {
        if(data[0].childElementCount == 3){
            return
        }
        temp = document.createElement("li")
        console.log(scoreReady[i])
        temp.innerHTML = scoreReady[i]
        Sdata[0].appendChild(temp)
    }

    document.getElementById("play").value = ""
    save()
}
function reconstruct(){
    console.table(tracker)
    let val = localStorage.getItem("Vtracker").split(",")
    
        
    }
