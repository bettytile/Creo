"use client";
import { Card, Divider } from "antd";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from  'gsap-trial/ScrollTrigger';
import { gsap, TweenLite } from "gsap-trial";
import { DrawSVGPlugin } from "gsap-trial/DrawSVGPlugin";
import { MotionPathPlugin } from 'gsap-trial/MotionPathPlugin';

// Register the GSAP plugins
if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, MotionPathPlugin);

export default function Home() {
  const textRef = useRef<HTMLSpanElement>(null);
  const lineRef = useRef<SVGLineElement>(null);
  const line2Ref = useRef<SVGLineElement>(null);
  const paraRef = useRef<HTMLParagraphElement>(null);
  const hiddenTextRef = useRef<HTMLSpanElement>(null);
  const visibleTextRef = useRef<HTMLSpanElement>(null);
  const verRef = useRef<SVGLineElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (lineRef.current) {
      gsap.fromTo(
        lineRef.current,
        { strokeDasharray: 1000, strokeDashoffset: 1000 },
        {
          strokeDashoffset: 0,
          scrollTrigger: {
            trigger: lineRef.current,
            start: 'top 80%', 
            end: 'bottom 0%',
            scrub: 2,
          },
        }
      );}
      if (lineRef.current) {
        gsap.fromTo(
          line2Ref.current,
          { strokeDasharray: 1000, strokeDashoffset: 1000 },
          {
            strokeDashoffset: 0,
            scrollTrigger: {
              trigger: line2Ref.current,
              start: 'top 80%', 
              end: 'bottom 0%',
              scrub: 2,
            },
          }
        );}
      if (textRef.current) {
      gsap.fromTo(
        textRef.current,
        { strokeDasharray: 1000, strokeDashoffset: 1000 },
        {
          strokeDashoffset: 0,
          scrollTrigger: {
            trigger: verRef.current,
            start: 'bottom 100%', 
            end: 'top 0%',
            scrub: 2,
          },
        }
      );
    }
    if (verRef.current) {
      gsap.fromTo(
        verRef.current,
        { strokeDasharray: 1000, strokeDashoffset: 1000 },
        {
          strokeDashoffset: 0,
          scrollTrigger: {
            trigger: verRef.current,
            start: 'bottom 100%', 
            end: 'top 0%',
            scrub: 2,
          },
        }
      );
    }
    if (hiddenTextRef.current && visibleTextRef.current) {
      gsap.set(hiddenTextRef.current, { visibility: 'hidden' });

      gsap.timeline()
        .to(hiddenTextRef.current, { visibility: 'visible', delay: 1 }) 
        .to(visibleTextRef.current, { x: '100%', duration: 1 }) 
        .to(visibleTextRef.current, { x: '0%', duration: 0 }); 
    }
  }, []);

  return (
    <main className="flex min-h-screen flex-col">
      <div className="flex min-h-screen flex-col items-center">
      <Card className='card-2 title'>
            <p className='text-center'><span>CREO</span></p>
        </Card>
        </div>
        <div className="flex min-h-screen ">
        <Card className=''>
            <p className='py-20'><span className='what'>WHAT <sup className='creo'>IS CREO?</sup></span></p>
        </Card>
        </div>
        <div className="flex min-h-screen">
        <Card className='card-2'>
          <div style={{display:'flex', alignItems:'center', flexDirection:'column', marginTop: "100px"}}>
            <p className='para' ><span>We are not another 360 agency</span></p>
            <svg width="2" height="500px" style={{position:'absolute', paddingTop:'50px', zIndex:'1000'}}>
      <line
        ref={verRef}
        x1="0"
        y1="0%"
        x2="2"
        y2="100%"
        stroke="grey"
        strokeWidth="4"
      />
    </svg>
          </div>
        </Card>
        </div>
        <div className="flex min-h-screen flex-col items-center">
        <Card className='card-3'>
        <p className="para">
        <span>But rather </span>
        <span ref={textRef}>a mindset</span>
      </p>
      <svg width="100%" height="2">
      <line
        ref={line2Ref}
        x1="50%"
        y1="2"
        x2="100%"
        y2="2"
        stroke="white"
        strokeWidth="4"
      />
    </svg>
        </Card>
      </div>
      <div className="flex min-h-screen">
        <Card ref={card2Ref} className='card-2'>
          <div style={{display:'flex', alignItems:'center', flexDirection:'column', marginTop: "100px"}}>
          {/* <svg>
        <line ref={verRef} x1="100" y1="10" x2="50" y2="90" stroke="black" strokeWidth="2" />
      </svg> */}
          <svg width="100%" height="2">
      <line
        ref={lineRef}
        x1="0%"
        y1="2"
        x2="50%"
        y2="2"
        stroke="black"
        strokeWidth="4"
      />
    </svg>
            <p className='para' ><span>that will challenge you</span></p>
           
          </div>
        </Card>
       
        </div>
        <hr/>
        <div className="flex min-h-screen">
        <Card className='card-2'>
          <div style={{display:'flex', alignItems:'center', flexDirection:'column', marginTop: "100px"}}>
          <p className='para rethinkp' ref={paraRef}>
      <span className='texts'>To </span>
      <span className='texts text-hidden' ref={hiddenTextRef}> re</span>
      <span className='texts text-visible' ref={visibleTextRef}>
        <span>think</span>
      </span>
    </p>
           
          </div>
        </Card>
        </div>
    </main>
  );
}


