import React from 'react'
import {Stats} from 'react-particles-js'
import Particles from 'react-particles-js';
import { Repulse } from 'tsparticles/Options/Classes/Interactivity/Modes/Repulse';
import { Background } from 'tsparticles/Options/Classes/Background/Background';
export default function Homepage() {
    return (
        <div  className="home">
          <div className="maindiv">
      
        <Particles
       
           

      className="particles-snow"
      params={{
        particles: {
          number: {
            value: 200,
            density: {
              enable: true,
              value_area: 1000
            }
          },
          color: {
            value: "rgba(255,0,0)"
          },
          shape: {
            type: "circle",
            stroke: {
              width: 0,
              color: "#B3B3B3"
            },
            polygon: {
              nb_sides: 5
            },
            image:{
                src:"img/github.svg",
                width:100,
                height:100

            }
          },
          opacity: {
            value: 0.5,
            random: false,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.1,
              sync: false
            }
          },
          size: {
            value: 6,
            random: true,
            anim: false,
            speed: 40,
            size_min: 0.1,
            syno: false
          },
          line_linked: {
            enable: false,
            distance: 150, 
            color: "#ffffff",
            opacity: 0.4,
            width: 1
          },
          move: {
            enable: true,
            speed: 1,
            direction: "bottom",
            random: false,
            out_mode: "out",
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200
            }
          }
        },
        interactivity:{
            detect_on:"canvas",
            events:{
                onhover:{
                    enable:true,
                    mode:"repulse"

                },
                onClick:{
                    enable:true,
                    mode:"push"
                },
                resize:true
            },
            modes:{
                grab:{
                    distance:400,
                    line_linked:{
                        opacity:1
                    }
                },
                bubble:{
                    distance:400,
                    size:40,
                    duration:2,
                    opacity:8,
                    speed:1
                },
                repulse:{
                    distance:200,
                    duration:0.4
                },
                push:{
                    particles_nb:4
                },
                remove:{
                    particles_nb:2
                }
            }
        },
        retina_detect:true
      }}
    

     />
    
       <div className="div" >
     
       <h1>Red Handed</h1>
       
       <h2>AI Invigilation</h2>
      </div>
      </div>
      </div>
     
     
  
      
    )
    
}
