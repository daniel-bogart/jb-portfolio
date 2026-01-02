import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-start justify-start w-full relative">
          <div className="flex flex-col items-center justify-start gap-4 absolute left-0 top-0">
            <span className="w-[32px] h-[80px] bg-black"></span>
            <span className="h-[47px] w-[47px] bg-black rounded-full"></span>
          </div>
          <div className="flex flex-col items-start justify-start pl-16">
            <span className="h-[33px] w-[50%] bg-black ml-[-30px]"></span>
            <h1 className="pl-4 pt-4 text-6xl max-w-6xl font-semibold mb-12 font-[family-name:var(--font-kay-pho-du)]">
              JB Packer is a production designer & director based in Los
              Angeles, CA.{" "}
            </h1>
          </div>
        </div>
        <div className="space-y-6 font-[family-name:var(--font-kay-pho-du)] w-full flex items-center justify-center">
          <div className="flex flex-col font-semibold gap-6 max-w-5xl">
            <p className="text-2xl leading-relaxed">
              John &quot;JB&quot; Packer is a production designer and director
              from Humboldt County, California. He graduated California State
              University Los Angeles in 2023 with a Bachelor&apos;s Degree in
              Film Production. Also a founding member of the production company
              Raw Color Studios, he continues to work with the group frequently.
              Shooting films and hosting live events since their founding.
            </p>
            <p className="text-2xl leading-relaxed">
              He is known for leaning into highly stylized and aesthetic based
              film work. Obsessing over the idea of cohesiveness between each
              piece of production. From both shot to shot and department to
              department. Creating a living, breathing, and tangible world that
              can further accentuate the emotions of our own is always the end
              goal.
            </p>
          </div>
        </div>
        <div className="flex items-start justify-start p-4">
          <div className="flex flex-col items-start justify-start w-[388px] min-w-[388px]">
            <Image
              src="/jb-writing.png"
              alt="JB Packer"
              width={388}
              height={388}
              className="w-[388px] h-auto"
            />
            <p className="text-sm font-[family-name:var(--font-kay-pho-du)] text-end max-w-[295px] flex self-end">
              (Early 2025, editing The Space Between Two Worlds)
            </p>
          </div>
          <div className="flex flex-row gap-4 justify-end items-end self-end w-full">
            <Link
              href="https://www.instagram.com/jbsaysrelax?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity"
              aria-label="Instagram"
            >
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M35 13H35.02M14 4H34C39.5228 4 44 8.47715 44 14V34C44 39.5228 39.5228 44 34 44H14C8.47715 44 4 39.5228 4 34V14C4 8.47715 8.47715 4 14 4ZM32 22.74C32.2468 24.4045 31.9625 26.1044 31.1875 27.598C30.4125 29.0916 29.1863 30.3028 27.6833 31.0593C26.1802 31.8159 24.4769 32.0792 22.8156 31.8119C21.1543 31.5445 19.6195 30.7602 18.4297 29.5703C17.2398 28.3805 16.4555 26.8457 16.1881 25.1844C15.9208 23.5231 16.1841 21.8198 16.9407 20.3167C17.6972 18.8137 18.9084 17.5875 20.402 16.8125C21.8956 16.0375 23.5955 15.7532 25.26 16C26.9578 16.2518 28.5297 17.0429 29.7434 18.2566C30.9571 19.4703 31.7482 21.0422 32 22.74Z"
                  stroke="#1E1E1E"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
            <Link
              href="https://www.rawcolorstudios.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity"
              aria-label="Raw Color Studios"
            >
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.9999 25.9999C20.8588 27.1482 21.9546 28.0983 23.213 28.7858C24.4714 29.4733 25.8629 29.8822 27.2932 29.9846C28.7235 30.087 30.1591 29.8807 31.5026 29.3795C32.8461 28.8783 34.0661 28.0941 35.0799 27.0799L41.0799 21.0799C42.9015 19.1939 43.9094 16.6679 43.8867 14.0459C43.8639 11.424 42.8122 8.91583 40.9581 7.06175C39.104 5.20766 36.5959 4.15597 33.9739 4.13319C31.352 4.11041 28.8259 5.11835 26.9399 6.93993L23.4999 10.3599M27.9999 21.9999C27.141 20.8517 26.0452 19.9016 24.7868 19.2141C23.5284 18.5265 22.1369 18.1177 20.7066 18.0153C19.2763 17.9128 17.8407 18.1192 16.4972 18.6204C15.1537 19.1215 13.9337 19.9058 12.9199 20.9199L6.91991 26.9199C5.09833 28.806 4.09039 31.332 4.11317 33.9539C4.13596 36.5759 5.18764 39.084 7.04173 40.9381C8.89581 42.7922 11.4039 43.8439 14.0259 43.8667C16.6479 43.8895 19.1739 42.8815 21.0599 41.0599L24.4799 37.6399"
                  stroke="#1E1E1E"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="w-full text-center py-12 mt-12">
          <p className="text-2xl font-bold font-[family-name:var(--font-kay-pho-du)]">
            Copyright © John Packer 2026
          </p>
        </div>
      </div>
    </main>
  );
}
