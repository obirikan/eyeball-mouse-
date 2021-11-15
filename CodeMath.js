 var canvas=document.querySelector("canvas")
 var width=canvas.width=window.innerWidth
 var height=canvas.height=window.innerHeight
 var c=canvas.getContext("2d")
 var body=document.querySelector("body")

 var centerX=width/2
 var centerY=height/2
 var xArrow=width/2
 var yArrow=height/2
 var angle=0
 var dx=null
 var dy=null

 var col={
   xc:null,
   yc:null
 }

 addEventListener("mousemove",function(e){
   col.xc=e.x
   col.yc=e.y
   console.log(col)
 })




var object=function(){

  c.save()
  c.translate(xArrow, yArrow)
  c.rotate(angle)

   c.beginPath()
   c.arc(0,0,50,0,Math.PI*2,false)
   c.fillStyle="white"
   c.fill()
  

   c.beginPath()
   c.arc(8,8,27,0,Math.PI*2,false)
  //  c.fillStyle=`rgb(${col.xc},${col.yc},0)`
  c.fillStyle="black"
   c.fill()
  
  //  c.beginPath()
  //  c.arc(5,5,10,0,Math.PI*2,false)
  //  c.fillStyle="red"
  //  c.fill()

   
  
 }


addEventListener("mousemove",function(e){
  dx=e.clientX-xArrow
  dy=e.clientY-yArrow
  
  angle=Math.atan2(dy,dx)
})



 var anime=function() {
 requestAnimationFrame(anime)
  c.clearRect(0,0,width,height)
  object()
  c.restore()
 }
 anime()