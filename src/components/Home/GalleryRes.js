import React, { useEffect } from "react";
import './Gallery.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function GalleryRes() {

  useEffect(()=>{
    AOS.init({
      once:'true',
    });
  },[]);

  return (
    <div className='gallerysection' id="galleryid">
        <div className='gallery_images'>
            <img src='images\image1.jpg' alt='image1.jpg' className='img1' data-aos="slide-left" data-aos-duration="14000" data-aos-once='true' />
            <img src='images\image2.jpg' alt='image2.jpg'className='img2' data-aos="slide-right" data-aos-duration="14000" data-aos-once='true' />
            <img src='images\image3.jpg' alt='image3.jpg'className='img3' data-aos="slide-left" data-aos-duration="14000" data-aos-once='true' />
        </div>
        <div className='gallery_text'>
            <p>
            &emsp;Having sold a total of 70 million records worldwide, One Direction is one of the best-selling boy bands of all time, released five studio albums, ten extended plays, seventeen singles (including two charity singles), two video albums, and seventeen music videos.

In a watershed moment in 1D history, Zayn Malik bailed on The X Factor’s dance segment because dancing made him feel weird. He eventually returned to the stage, but not before establishing a precedent: One Direction was a boy band, one of the most successful in pop history, but that didn’t mean they were going to dance. <br/><br/>&emsp;Whatever crazy things happened around them—95,000 fans packed into a South African soccer stadium, the Directioner who forced his way into Liam’s hotel room to steal his boxers and wear them around for a day, a shrine to where Harry got sick on the side of the LA freeway—the boys maintained an approachability that made them seem a little different. The silly videos, the way they laughed in interviews, Harry sitting behind Rihanna at the 2013 MTV Video Music Awards and casually peeling an orange. (It’s an orange!)<br/><br/>&emsp; So, yes, a big show—but also five kids who won the lottery of life and were just as much a part of it as everyone else.Of course, they knew how to write for their mostly female, mostly adolescent fans. More importantly, they made a point of treating their mostly female, mostly teenage fans with respect, bringing a sense of allyship to pop stardom that felt both refreshing and necessary. <br/><br/>&emsp;
Of course, they knew how to write for their mostly female, mostly adolescent fans. More importantly, they made a point of treating their mostly female, mostly teenage fans with respect, bringing a sense of allyship to pop stardom that felt both refreshing and necessary. Reflecting on their success during the group’s hiatus, Harry would wonder why teenage girls’ tastes weren’t taken as seriously as, say, middle-aged men’s. Was there ever a more intense or committed love than that of a teenage girl?
            </p>
            <div className='vanisher'>
        <p>
        <br/><br/> &emsp;
                <br/><br/> &emsp;
            </p>
        </div>
        </div>
    </div>
  )
}

export default GalleryRes