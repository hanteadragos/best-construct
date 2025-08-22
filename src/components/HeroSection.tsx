"use client";
import { motion } from "motion/react";
import { LuSearch } from "react-icons/lu";
import Image from "next/image";
import Link from "next/link";
export default function Hero() {
  return (
    <section className="bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#507069,#ffff_66%)]">
      <div className="laptop:px-20 container mx-auto px-4 py-6">
        <div className="tablet:flex tablet:gap-x-8 laptop-l:gap-x-0 items-center justify-around">
          <div className="tablet:items-start flex flex-col items-center">
            <div className="flex justify-center">
              <div className="inline-flex rounded-lg border border-[#222]/25 px-3 py-1 font-mono text-sm tracking-tight">
                Best Construct este aici!
              </div>
            </div>

            <h1 className="laptop:text-7xl laptop-l:text-[82px] mobile-m:text-[46px] mobile-l:text-[52px] tablet:text-[57px] tablet:text-left mt-6 flex flex-col text-center text-4xl font-medium leading-[1.1] tracking-tighter">
              <span className="flex justify-center">Construim fațade</span>
              <span className="to-vertidigris-400 flex justify-center bg-gradient-to-b from-black bg-clip-text text-transparent">
                pe care le iubești
              </span>
            </h1>

            <p className="text-vertidigris-950 tablet:[text-align-last:auto] mt-6 max-w-xl text-justify text-xl tracking-tight [text-align-last:center]">
              Construim fațade cu tehnologii avansate, renovăm cu materiale
              inovatoare, instalăm sisteme inteligente și deservim clienți din
              toată Moldova. Tu beneficiezi de soluții de viitor, eficiență
              maximă și casa ta devine un exemplu.
            </p>

            <div className="mt-6 flex justify-center gap-2">
              <div>
                <Link className="primary-button" href="#contact">
                  Contactează-ne
                </Link>
              </div>

              <div>
                <Link className="secondary-button" href="#faq">
                  <LuSearch
                    strokeWidth={3.25}
                    className="mobile-s:hidden mobile-m:flex h-3.5 w-3.5 text-black/75"
                  />
                  <span>Aveți întrebări?</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="laptop:w-1/3 tablet:w-1/2">
            <div>
              <Image
                className="mt-6 rounded-xl"
                src="/hero-image.jpg"
                alt="Hero"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
