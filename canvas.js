var c = document.getElementById("myCanvas")
var ctx = c.getContext("2d")
ctx.fillStyle = "green"

var moveX = 5
var moveY = 20
var lineX = 400
var lineY = 100

const start = ()=>{
    ctx.moveTo(moveX,moveY)
    ctx.lineTo(lineX,lineY)
    ctx.stroke()
    moveY += 30
    lineY += 30
    setTimeout(start, 500)
}
var x = 0
var y = 0
var w = 80
var h = 35
var s1 = 100
var s2 = 300
var d1 = 0
var d2 = 0
var s3 = 400
var d3 = 0

const boxMe = ()=>{
    ctx.clearRect(0,0,400,400)
    ctx.fillRect(x,y,w,h);
    y += 20;
    ctx.fillRect(s1,d1,w,h);
    d1 += 30;
    ctx.fillRect(s2,d2,w,h);
    d2 += 30;
    ctx.fillRect(s3,d3,w,h);
    d3 += 40;
    if (y==400 || d2==400){
        if (y==360){
            x= 0
            y= 0
        }if (d1== 400){
            s1 =150
            d1 = 30
        }if (d1==360) {
            s2 = 300
            d2 =30
        }if (d1== 360){
            s3 = 400
            d3 = 50  
        }
        else{
        alert("Game Over")
        location.reload()
        return;
    }
    
  }
    setTimeout(boxMe, 1000)
}
