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
      {/* Mobile Navigation */}
      <div className="lg:hidden">
        <Navigation />
      </div>
      
      {/* Desktop Navigation */}
      <div className="hidden lg:block">
        <HomepageNavBar />
      </div>

      {/* Mobile Layout - Simple stacked images */}
      <div className="lg:hidden flex flex-col bg-[#E8E2D5] w-full min-h-screen pt-16 px-3 max-w-[100vw] overflow-x-clip">
        {/* Mobile intro text */}
        <div className="bg-black text-white p-3 mb-3 w-full max-w-full">
          <p className="text-[10px] leading-tight font-semibold font-[family-name:var(--font-days-one)] mb-2">
            [01] Production Designer & Director. Founding member of Raw Color Studios.
          </p>
          <p className="text-[10px] leading-tight font-semibold font-[family-name:var(--font-days-one)]">
            [02] Born in HUMBOLDT COUNTY. Based in Los Angeles CA.
          </p>
        </div>

        {/* Mobile images - SINGLE COLUMN, constrained width */}
        <div className="flex flex-col gap-3 mb-3 w-full">
          {images?.image1 && <ImageLink image={images.image1 as Asset} alt="Homepage Image 1" />}
          {images?.image2 && <ImageLink image={images.image2 as Asset} alt="Homepage Image 2" />}
          {images?.image3 && <ImageLink image={images.image3 as Asset} alt="Homepage Image 3" />}
          {images?.image4 && <ImageLink image={images.image4 as Asset} alt="Homepage Image 4" />}
        </div>

        {/* Mobile statement */}
        <div className="bg-black text-white p-3 mb-3 w-full max-w-full">
          <p className="text-[10px] leading-tight font-normal font-[family-name:var(--font-days-one)] mb-2">
            [03] With work that emphasizes leaning into highly stylized
            and aesthetic based film. As well as obsessing over the idea
            of cohesiveness between each and every aspect of production.
          </p>
          <p className="text-[10px] leading-tight font-normal font-[family-name:var(--font-days-one)]">
            Creating a living, breathing, and tangible world that can
            further accentuate the emotions of our own is always the end goal.
          </p>
        </div>

        {/* Mobile Copyright */}
        <div className="w-full text-center py-3 pb-6 max-w-full">
          <p className="text-[10px] font-bold font-[family-name:var(--font-kay-pho-du)]">
            Copyright © John Packer 2026
          </p>
        </div>
      </div>

      {/* Desktop Layout - Original tilted design */}
      <div className="hidden lg:flex items-center justify-center bg-[#E8E2D5] w-full overflow-x-clip">
        <div className="w-full flex flex-col max-w-8xl px-6 py-6 pt-[440px] rotate-15 ml-[-30%] gap-8">
          <div className="w-full flex flex-row justify-between items-start overflow-visible relative">
            <div className="flex flex-col items-center justify-center gap-8">
              <span className="w-[32px] h-[100vh] bg-black"></span>
              <span className="w-[47px] h-[47px] rounded-full bg-black"></span>
            </div>
            <div className="w-full h-full flex flex-col items-center justify-center gap-8  px-10">
              <Link 
                href={String((images?.image1 as Asset)?.fields?.description || '/film')}
                className="relative group w-full overflow-hidden block"
              >
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-500 ease-in-out z-10" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-600 ease-in-out z-20">
                  <h3 className="text-white text-4xl font-bold text-center px-8 font-[family-name:var(--font-kay-pho-du)]">
                    {String((images?.image1 as Asset)?.fields?.title || '')}
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
                href={String((images?.image2 as Asset)?.fields?.description || '/film')}
                className="relative group w-full overflow-hidden block"
              >
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-500 ease-in-out z-10" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-600 ease-in-out z-20">
                  <h3 className="text-white text-4xl font-bold text-center px-8 font-[family-name:var(--font-kay-pho-du)]">
                    {String((images?.image2 as Asset)?.fields?.title || '')}
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
            <div className="flex flex-col items-center justify-center gap-8">
              <span className="w-[32px] h-[100vh] bg-black"></span>
              <span className="w-[47px] h-[47px] rounded-full bg-black "></span>
            </div>
            <div className="flex flex-row items-center justify-center gap-8 absolute right-[-52vw] bottom-0">
              <span className="w-[47px] h-[47px] rounded-full bg-black "></span>
              <span className="w-[50vw] h-[32px] bg-black"></span>
            </div>
          </div>
          <div className="w-[130vw] flex flex-row justify-between items-start ml-[30%]">
            <span className="w-[32px] h-[150vh] bg-black"></span>
            <div className="w-full h-full grid grid-cols-3 gap-8 px-10">
              <Link 
                href={String((images?.image3 as Asset)?.fields?.description || '/film')}
                className="relative group col-span-2 overflow-hidden block"
              >
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-500 ease-in-out z-10" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-600 ease-in-out z-20">
                  <h3 className="text-white text-4xl font-bold text-center px-8 font-[family-name:var(--font-kay-pho-du)]">
                    {String((images?.image3 as Asset)?.fields?.title || '')}
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
              <div className="flex items-center justify-center bg-black row-span-2 p-6">
                <div className="-rotate-90 w-[calc(100vh*1.2)] text-center flex flex-col items-center justify-center ml-[-50%] gap-8">
                  <p className="text-white mb-4 w-[calc(100vh*1.2)] text-center text-xl font-normal font-[family-name:var(--font-days-one)]">
                    [03] With work that emphasizes leaning into highly stylized
                    and aesthetic based film. As well as obsessing over the idea
                    of cohesiveness between each and every aspect of production.
                    From both shot to shot and department to department.
                  </p>
                  <p className="text-white w-[calc(100vh*1.2)] text-center text-xl font-normal font-[family-name:var(--font-days-one)]">
                    Creating a living, breathing, and tangible world that can
                    further accentuate the emotions of our own is always the end
                    goal.
                  </p>
                </div>
              </div>
              <Link 
                href={String((images?.image4 as Asset)?.fields?.description || '/film')}
                className="relative group col-span-2 overflow-hidden block"
              >
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-500 ease-in-out z-10" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-600 ease-in-out z-20">
                  <h3 className="text-white text-4xl font-bold text-center px-8 font-[family-name:var(--font-kay-pho-du)]">
                    {String((images?.image4 as Asset)?.fields?.title || '')}
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
            <div className="flex flex-col items-center justify-center gap-8">
              <span className="w-[32px] h-[100vh] bg-black"></span>
              <span className="w-[47px] h-[47px] rounded-full bg-black"></span>
            </div>
          </div>

          {/* Copyright */}
          <div className="w-full text-end py-6 items-end justify-end">
            <p className="text-3xl font-bold font-[family-name:var(--font-kay-pho-du)]">
              Copyright © John Packer 2026
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
