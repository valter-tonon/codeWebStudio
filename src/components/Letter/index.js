import React ,{useEffect} from 'react'
import ParticleBackground from 'react-particle-backgrounds'
import { Wrapper } from './styles'
import { TimelineMax} from 'gsap'


const Particles = function() {

  const settings = {
    particle: {
      particleCount: 100,
      color: "#d68c38",
      minSize: 2,
      maxSize: 4
    },
    velocity: {
      directionAngle: 0,
      directionAngleVariance: 30,
      minSpeed: 0.2,
      maxSpeed: 4
    },
    opacity: {
      minOpacity: 0,
      maxOpacity: 0.5,
      opacityTransitionTime: 5000
    }
  }
  
useEffect(()=>{
    const item = document.querySelector(".c")
    const item2 =document.querySelector(".c1") 
    const item3 =document.querySelector(".c2") 
    const item4 =document.querySelector(".c3") 
    const item5 =document.querySelector(".c4") 
    const item6 =document.querySelector(".c5") 
    const item7 =document.querySelector(".c6") 
   
  const tl =  new TimelineMax()
    tl.from(item, .5 ,{
        y : -50,
        opacity: 0,
      
    })
    .from(item2, .5 ,{ y : -50, opacity: 0},'-=0.3')
    .from(item3, .5 ,{ y : -50, opacity: 0},'-=0.3')
    .from(item4, .5 ,{ y : -50, opacity: 0},'-=0.3')
    .from(item5, .5 ,{ y : -50, opacity: 0},'-=0.3')
    .from(item6, .5 ,{ y : -50, opacity: 0},'-=0.3')
    .from(item7, .5 ,{ y : -50, opacity: 0},'-=0.3')
    
    
},[])

  return (
      <Wrapper>
         <ParticleBackground settings={settings}/>
         <div>
         <h1 className="c">c</h1>
         <h1 className="c1">o</h1>
         <h1 className="c2">d</h1>
         <h1 className="c3">e</h1>
         <h1 className="c4">W</h1>
         <h1 className="c5">e</h1>
         <h1 className="c6">b</h1>
         </div>
      </Wrapper>
    
  )
}


export default Particles