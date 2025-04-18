console.log(document.getele)
let tracker = new Map
let gamo
let great = 0
let curr = 0
let scores = new Map()
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
    let flat = Array.from(tracker)
    flat = JSON.stringify(flat)
    let flato = Array.from(scores)
    flato = JSON.stringify(flato)
    localStorage.setItem("gameList", document.getElementById("play").innerHTML)
    localStorage.setItem("save", document.getElementById("outp").innerHTML)
    localStorage.setItem("tracker", flat)
    localStorage.setItem("scores", flato)
    console.log(localStorage.getItem("Vtracker"))
}
function clears(){
    console.log("red")
    document.getElementById("outp").outerHTML = '<div class="out" id="outp"> </div>'
    document.getElementById("play").outerHTML = '<select id="play"> </select>'
    document.getElementById("play2").outerHTML = '<select id="play2"> </select>'
    localStorage.setItem("save", '')
    localStorage.setItem("n", 0)
    localStorage.setItem("tracker", '')
    localStorage.setItem("scores", '')
    tracker = new Map()
    scores = new Map()
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
    scores.set(data)
    console.log(score)
    let scoreReady = score.split(",")
    console.log(scoreReady)
    let temp = ""
    for (let i = 0; i < scoreReady.length; i++) {
        if(Sdata.childElementCount == 3){
            return
        }
        try{
            let yeso = Array.from(scores.get(data))
            yeso.push(scoreReady[i])
            scores.set(data, yeso)
    }
    catch{
        scores.set(data, scoreReady)
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
    let re = JSON.parse(localStorage.getItem("tracker"))
    tracker = new Map(re)
    let reo = JSON.parse(localStorage.getItem("scores"))
    scores = new Map(reo)
    console.table(tracker)
    document.getElementById("outp").innerHTML = localStorage.getItem("save")
    console.table(scores)
        
    }
document.addEventListener(onload, reconstruct())

function popular(){
    let out = document.getElementById("outp")
    out.innerHTML = `<div id="outp"><div class="sum"> <h1>Summary</h1> <div> <h2>Most Played Game</h2> <p class="MP"></p> </div> </div></div>`
    gamo = [["Tekken", 0], ['Fortnite', 0], ["Madden", 0], ["2k", 0], ["Marvel Rivals", 0], ["Gta5", 0]]

for (let p of tracker.values()){
    // p = Array.from(p)
    for (let z = 0; z < gamo.length ;z++) {
        for (let i = 0; i < 3; i++) {
            if(gamo[z][0] == p[i]){
                gamo[z][1]++
            }
        }
        
    }
}
for (let i = 0; i < gamo.length; i++) {
    if(gamo[i][1]>great){
        curr = i
        great = gamo[i][1]
    }
}
$(".MP").html("Most popular game is " + gamo[curr][0] + " played by (" + gamo[curr][1] + ") players")
localStorage.setItem("game", gamo[curr][0])
localStorage.setItem("num", gamo[curr][1])
}
function sum(){
    document.getElementById("outp").innerHTML = localStorage.getItem("save")
}
function average(){

    let average = new Map()
   
    for (let i = 1; i <= tracker.size; i++) { 
        let ave = 0
        let perso = document.getElementById(`Phead${i}`).innerHTML
        let = pers = scores.get(perso)
        for (let x = 0; x < pers.length; x++) {
                ave+=parseInt(pers[x])
        }
        average.set(perso, (ave / pers.length))

    }
    average = new Map ([...average.entries()].sort((a, b) => b[1] - a[1]))
    console.table(average)
   document.getElementById("outp").innerHTML = `<div id="outp"><div class="sum"> <h1>Summary</h1> <div> <h2>Most Played Game</h2> <ul id="yess" class="MPo"></ul> </div> </div></div>`
let yuurr = average.keys
    for (let z = 0; z < average.size; z++) {
        let realo = document.createElement('li')
        realo.innerHTML = `${z}) ${yuurr[z]} with a score of ${average.get(yuurr[z])}`
        console.log(realo)
        document.getElementById("yess").appendChild(realo)    }
    

}


console.log(tracker.keys().length)