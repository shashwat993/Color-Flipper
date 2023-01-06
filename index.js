const div1 = document.querySelector(".div1")
const div2 = document.querySelector(".div2")
const div3 = document.querySelector(".div3")
const div4 = document.querySelector(".div4")
const divx = document.querySelector(".x")
const divy = document.querySelector(".y")
const divp = document.querySelector(".p")
const divq = document.querySelector(".q")

const mainButton=document.querySelector("button")
// console.log(mainButton)

function randomColorGenerator(){
    red1=Math.floor(Math.random()*256)
    red2=Math.floor(Math.random()*256)
    red3=Math.floor(Math.random()*256)
    red4=Math.floor(Math.random()*256)
    red5=Math.floor(Math.random()*256)
    red6=Math.floor(Math.random()*256)
    red7=Math.floor(Math.random()*256)
    red8=Math.floor(Math.random()*256)
    buttonr=Math.floor(Math.random()*256)

    green1=Math.floor(Math.random()*256)
    green2=Math.floor(Math.random()*256)
    green3=Math.floor(Math.random()*256)
    green4=Math.floor(Math.random()*256)
    green5=Math.floor(Math.random()*256)
    green6=Math.floor(Math.random()*256)
    green7=Math.floor(Math.random()*256)
    green8=Math.floor(Math.random()*256)
    buttong=Math.floor(Math.random()*256)

    blue1=Math.floor(Math.random()*256)
    blue2=Math.floor(Math.random()*256)
    blue3=Math.floor(Math.random()*256)
    blue4=Math.floor(Math.random()*256)
    blue5=Math.floor(Math.random()*256)
    blue6=Math.floor(Math.random()*256)
    blue7=Math.floor(Math.random()*256)
    blue8=Math.floor(Math.random()*256)
    buttonb=Math.floor(Math.random()*256)

    return [`rgb(${red1},${green1},${blue1}`,`rgb(${red2},${green2},${blue2}`,`rgb(${red3},${green3},${blue3}`,`rgb(${red4},${green4},${blue4}`,`rgb(${red5},${green5},${blue5}`,`rgb(${red6},${green6},${blue6}`,`rgb(${red7},${green7},${blue7}`,`rgb(${red8},${green8},${blue8}`,`rgb(${buttonr},${buttong},${buttonb}`]
}
mainButton.addEventListener("click",()=>{
    const RandomColor = randomColorGenerator()
    div1.style.backgroundColor=RandomColor[0]
    div2.style.backgroundColor=RandomColor[1]
    div3.style.backgroundColor=RandomColor[2]
    div4.style.backgroundColor=RandomColor[3]
    divx.style.backgroundColor=RandomColor[4]
    divy.style.backgroundColor=RandomColor[5]
    divp.style.backgroundColor=RandomColor[6]
    divq.style.backgroundColor=RandomColor[7]
    mainButton.style.backgroundColor=RandomColor[8]})