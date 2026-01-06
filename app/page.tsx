"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import HomepageNavBar from "@/components/HomepageNavBar";
import Navigation from "@/components/Navigation";
import { getHomepageImages } from "@/lib/contentful";
import { HomepageImages, HomepageImagesFields } from "@/types/contentful";
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

  const images = homepageImages?.fields as HomepageImagesFields | undefined;

  // Reusable image link component for cleaner code
  const ImageLink = ({ image, alt, className = "" }: { image: Asset; alt: string; className?: string }) => (
    <Link 
      href={String(image?.fields?.description || '/film')}
      className={`relative group overflow-hidden block w-full max-w-full ${className}`}
    >
      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-500 ease-in-out z-10" />
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-600 ease-in-out z-20">
        <h3 className="text-white text-sm lg:text-4xl font-bold text-center px-3 lg:px-8 font-[family-name:var(--font-kay-pho-du)]">
          {String(image?.fields?.title || '')}
        </h3>
      </div>
      <Image
        src={`https:${image?.fields?.file?.url}`}
        alt={alt}
        width={1000}
        height={1000}
        className="w-full h-auto max-w-full transition-transform duration-500 ease-in-out scale-[1.025] group-hover:scale-100"
        sizes="100vw"
        style={{ maxWidth: '100%', height: 'auto' }}
      />
    </Link>
  );

  return (
    <div className="overflow-x-clip max-w-[100vw]">
      {/* Homepage Navigation - used on both mobile and desktop */}
      <HomepageNavBar />

      {/* Tilted Layout - Scaled for mobile and desktop */}
      <div className="flex items-center justify-center bg-[#E8E2D5] w-full overflow-x-clip">
        <div className="w-[140vw] lg:w-full flex flex-col max-w-8xl px-3 py-3 pt-[240px] lg:px-6 lg:py-6 lg:pt-[440px] rotate-15 ml-[-20%] lg:ml-[-30%] gap-4 lg:gap-8">
          <div className="w-full flex flex-row justify-between items-start overflow-visible relative">
            <div className="flex flex-col items-center justify-center gap-4 lg:gap-8">
              <span className="w-[8px] lg:w-[32px] h-[50vh] lg:h-[100vh] bg-black"></span>
              <span className="w-[20px] lg:w-[47px] h-[20px] lg:h-[47px] rounded-full bg-black"></span>
            </div>
            <div className="w-full h-full flex flex-col items-center justify-center gap-4 lg:gap-8 px-4 lg:px-10">
              <Link
                href={String(
                  (images?.image1 as Asset)?.fields?.description || "/film"
                )}
                className="relative group w-full overflow-hidden block"
              >
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-500 ease-in-out z-10" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-600 ease-in-out z-20">
                  <h3 className="text-white text-sm lg:text-4xl font-bold text-center px-3 lg:px-8 font-[family-name:var(--font-kay-pho-du)]">
                    {String((images?.image1 as Asset)?.fields?.title || "")}
                  </h3>
                </div>
                <Image
                  src={`https:${(images?.image1 as Asset)?.fields?.file?.url}`}
                  alt="Homepage Image 1"
                  width={1000}
                  height={1000}
                  className="w-full h-auto transition-transform duration-500 ease-in-out scale-[1.025] group-hover:scale-100"
                />
              </Link>
              <Link
                href={String(
                  (images?.image2 as Asset)?.fields?.description || "/film"
                )}
                className="relative group w-full overflow-hidden block"
              >
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-500 ease-in-out z-10" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-600 ease-in-out z-20">
                  <h3 className="text-white text-sm lg:text-4xl font-bold text-center px-3 lg:px-8 font-[family-name:var(--font-kay-pho-du)]">
                    {String((images?.image2 as Asset)?.fields?.title || "")}
                  </h3>
                </div>
                <Image
                  src={`https:${(images?.image2 as Asset)?.fields?.file?.url}`}
                  alt="Homepage Image 2"
                  width={1000}
                  height={1000}
                  className="w-full h-auto transition-transform duration-500 ease-in-out scale-[1.025] group-hover:scale-100"
                />
              </Link>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 lg:gap-8">
              <span className="w-[8px] lg:w-[32px] h-[40vh] lg:h-[100vh] bg-black"></span>
              <span className="w-[20px] lg:w-[47px] h-[20px] lg:h-[47px] rounded-full bg-black "></span>
            </div>
            <div className="flex flex-row items-center justify-center gap-4 lg:gap-8 absolute right-[-52vw] bottom-0">
              <span className="w-[20px] lg:w-[47px] h-[20px] lg:h-[47px] rounded-full bg-black "></span>
              <span className="w-[50vw] h-[8px] lg:h-[32px] bg-black"></span>
            </div>
          </div>
          <div className="w-[130vw] flex flex-row justify-between items-start ml-[30%]">
            <span className="hidden lg:block w-[8px] lg:w-[32px] h-[75vh] lg:h-[150vh] bg-black"></span>
            <div className="w-full h-full grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8 px-4 lg:px-10">
              <Link
                href={String(
                  (images?.image3 as Asset)?.fields?.description || "/film"
                )}
                className="relative group lg:col-span-2 overflow-hidden block"
              >
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-500 ease-in-out z-10" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-600 ease-in-out z-20">
                  <h3 className="text-white text-sm lg:text-4xl font-bold text-center px-3 lg:px-8 font-[family-name:var(--font-kay-pho-du)]">
                    {String((images?.image3 as Asset)?.fields?.title || "")}
                  </h3>
                </div>
                <Image
                  src={`https:${(images?.image3 as Asset)?.fields?.file?.url}`}
                  alt="Homepage Image 3"
                  width={1000}
                  height={1000}
                  className="w-full h-auto transition-transform duration-500 ease-in-out scale-[1.025] group-hover:scale-100"
                />
              </Link>
              <div className="hidden lg:flex items-center justify-center bg-black lg:row-span-2 p-3 lg:p-6">
                <div className="-rotate-90 w-[calc(100vh*0.6)] sm:w-[calc(100vh*0.7)] md:w-[calc(100vh*0.8)] lg:w-[calc(100vh*0.5)] xl:w-[calc(100vh*1.2)] text-left flex flex-col items-center justify-center xl:ml-[-50%] lg:ml-[-25%] md:ml-[-25%] ml-[15%] gap-4 lg:gap-8 ">
                  <p className="text-white mb-2 lg:mb-4 w-[calc(100vh*0.3)] sm:w-[calc(100vh*0.4)] md:w-[calc(100vh*0.6)] lg:w-[calc(100vh*0.8)] xl:w-[calc(100vh*1.2)] text-left text-[10px] lg:text-xl font-normal font-[family-name:var(--font-days-one)] text-xs">
                    [03] With work that emphasizes leaning into highly stylized
                    and aesthetic based film. As well as obsessing over the idea
                    of cohesiveness between each and every aspect of production.
                    From both shot to shot and department to department.
                  </p>
                  <p className="text-white w-[calc(100vh*0.3)] sm:w-[calc(100vh*0.4)] md:w-[calc(100vh*0.6)] lg:w-[calc(100vh*0.8)] xl:w-[calc(100vh*1.2)] text-left text-[10px] lg:text-xl font-normal font-[family-name:var(--font-days-one)] text-xs">
                    [04] Creating a living, breathing, and tangible world that can
                    further accentuate the emotions of our own is always the end
                    goal.
                  </p>
                </div>
              </div>
              <Link
                href={String(
                  (images?.image4 as Asset)?.fields?.description || "/film"
                )}
                className="relative group lg:col-span-2 overflow-hidden block"
              >
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-500 ease-in-out z-10" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-600 ease-in-out z-20">
                  <h3 className="text-white text-sm lg:text-4xl font-bold text-center px-3 lg:px-8 font-[family-name:var(--font-kay-pho-du)]">
                    {String((images?.image4 as Asset)?.fields?.title || "")}
                  </h3>
                </div>
                <Image
                  src={`https:${(images?.image4 as Asset)?.fields?.file?.url}`}
                  alt="Homepage Image 4"
                  width={1000}
                  height={1000}
                  className="w-full h-auto transition-transform duration-500 ease-in-out scale-[1.025] group-hover:scale-100"
                />
              </Link>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 lg:gap-8">
              <span className="w-[8px] lg:w-[32px] h-[50vh] lg:h-[100vh] bg-black"></span>
              <span className="w-[20px] lg:w-[47px] h-[20px] lg:h-[47px] rounded-full bg-black"></span>
            </div>
          </div>

          {/* Copyright */}
          <div className="w-full text-end py-3 lg:py-6 items-end justify-end">
            <p className="text-base lg:text-3xl font-bold font-[family-name:var(--font-kay-pho-du)]">
              Copyright © John Packer 2026
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
