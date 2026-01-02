"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import HomepageNavBar from "@/components/HomepageNavBar";
import { getHomepageImages } from "@/lib/contentful";
import { HomepageImages } from "@/types/contentful";
import { Asset } from "contentful";
import { gsap } from "gsap";

const aboutText = `John "JB" Packer is a production designer and director from 
Humboldt County, California. He graduated California State University
Los Angeles in 2023 with a Bachelor's Degree in Film Production. 
Also a founding member of the production company Raw Color Studios, 
he continues to work with the group frequently. Shooting films and 
hosting live events since their founding. 

He is known for leaning into highly stylized and aesthetic based film 
work. Obsessing over the idea of cohesiveness between each piece of 
production. From both shot to shot and department to department.
Creating a living, breathing, and tangible world that can further 
accentuate the emotions of our own is always the end goal.`;

export default function Home() {
  const [homepageImages, setHomepageImages] = useState<HomepageImages | null>(
    null
  );
  const [loading, setLoading] = useState(true);
  const imagesRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    getHomepageImages().then((data) => {
      setHomepageImages(data);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    if (!loading && imagesRef.current.length > 0) {
      // Animate images in with stagger
      gsap.fromTo(
        imagesRef.current,
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
        }
      );
    }
  }, [loading]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#E8E2D5]">
        <p>Loading...</p>
      </div>
    );
  }

  const images = homepageImages?.fields;

  return (
    <>
      <HomepageNavBar />

      <div className="flex items-center justify-center bg-[#E8E2D5] w-full">
        <div className="w-full flex flex-col max-w-8xl px-6 py-6 pt-[440px] rotate-15 ml-[-30%] gap-8">
           <div className="w-full flex flex-row justify-between items-start overflow-visible relative">
            <div className="flex flex-col items-center justify-center gap-8">
              <span className="w-[32px] h-[100vh] bg-black"></span>
              <span className="w-[47px] h-[47px] rounded-full bg-black"></span>
            </div>
            <div className="w-full h-full flex flex-col items-center justify-center gap-8  px-10">
              <Image
                src={`https:${images?.image1?.fields?.file?.url}`}
                alt="Homepage Image 1"
                width={1000}
                height={1000}
                className="w-full h-auto"
              />
              <Image
                src={`https:${images?.image2?.fields?.file?.url}`}
                alt="Homepage Image 2"
                width={1000}
                height={1000}
                className="w-full h-auto"
              />
            </div>
            <div className="flex flex-col items-center justify-center gap-8">
              <span className="w-[32px] h-[100vh] bg-black"></span>
              <span className="w-[47px] h-[47px] rounded-full bg-black "></span>
            </div>
            <div className="flex flex-row items-center justify-center gap-8 absolute right-[-52vw] bottom-0">
              <span className="w-[47px] h-[47px] rounded-full bg-black "></span>
              <span className="w-[50vw] h-[32px] bg-black"></span>
            </div>
          </div>
          <div className="w-full flex flex-row justify-between items-start ml-[30%]">
            <span className="w-[32px] h-[150vh] bg-black"></span>
            <div className="w-full h-full flex flex-col items-center justify-center gap-8  px-10">
              <Image
                src={`https:${images?.image3?.fields?.file?.url}`}
                alt="Homepage Image 3"
                width={1000}
                height={1000}
                className="w-full h-auto"
              />
              <Image
                src={`https:${images?.image4?.fields?.file?.url}`}
                alt="Homepage Image 4"
                width={1000}
                height={1000}
                className="w-full h-auto"
              />
            </div>
            <div className="flex flex-col items-center justify-center gap-8">
              <span className="w-[32px] h-[100vh] bg-black"></span>
              <span className="w-[47px] h-[47px] rounded-full bg-black"></span>
            </div>
          </div>
          
          {/* Copyright */}
          <div className="w-full text-end py-12 items-end justify-end">
            <p className="text-3xl font-bold font-[family-name:var(--font-kay-pho-du)]">Copyright © John Packer 2026</p>
          </div>
        </div>
      </div>
    </>
  );
}
