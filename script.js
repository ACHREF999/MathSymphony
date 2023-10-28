window.addEventListener('load',()=>{
const canvas = document.getElementById("canvas")

const context = canvas.getContext('2d')

const func = (x,a)=>{
    // let a =  2
    let temp1 = Math.cbrt(x)**2
    // temp = temp*temp;
    // console.log(temp)
    // temp += (0.9*Math.sqrt(5-x**2))*Math.sin(a*Math.PI*x)
    let temp2 = Math.sqrt(5-x**2)*0.9*Math.sin(a*Math.PI*x)
    // console.log(temp1,temp2)

    return temp1+temp2
}

let t= 0;
let a = 2
const scale = 100;
canvas.width = 480;
canvas.height = 480;
const sqrt5 = Math.sqrt(5)
const factor = sqrt5/(canvas.width/2)
let incremental = 0.2
let multiplier = 1.6
const gradient = context.createLinearGradient(0,0,360,480)
gradient.addColorStop(0,"red")
gradient.addColorStop(0.7,"pink")
gradient.addColorStop(1,"#dfdfdf")
// context.shadowColor = "#99999911";
// context.shadowBlur    = 0;
// context.shadowOffsetX = 200;
// context.shadowOffsetY = 200;
function animate(){
    context.clearRect(0,0,canvas.width,canvas.height)
    context.beginPath()
    context.strokeStyle=gradient;
    context.lineWidth=2;


    for(let x=0;x<canvas.width;x++){
        let y = canvas.height /2 - (
            func((x-canvas.width/2)*factor,a)*scale
        ) + 50
        context.lineTo(Math.floor(x), Math.floor(y))
        // console.log(x,y)
        context.stroke()
    }
    
    context.closePath()
    // t+=incremental;
    // Math.sin(t) > 0? incremental *=-1:incremental=incremental;
    a=a+incremental;

    if(a>12){
        incremental = -incremental

    }
    // if(a==1){
    //     multiplier = 1.6
    // }
    if (a<2) {
        incremental = 0.2
    }

    console.log('multiplier: ',multiplier)
    console.log('a: ',a)
    requestAnimationFrame(animate)
}


animate()


})