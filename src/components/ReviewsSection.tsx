"use client";
import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { LuStar } from "react-icons/lu";

const testimonials = [
  {
    text: "Echipa a dat dovadă de profesionalism. Izolația a îmbunătățit confortul interior. Recomand!",
    name: "Alexandru Popescu",
    stars: [
      <LuStar
        strokeWidth={2}
        fill="#e17100"
        className="h-3.5 w-3.5 text-amber-600"
        key={1}
      />,
      <LuStar
        strokeWidth={2}
        fill="#e17100"
        className="h-3.5 w-3.5 text-amber-600"
        key={2}
      />,
      <LuStar
        strokeWidth={2}
        fill="#e17100"
        className="h-3.5 w-3.5 text-amber-600"
        key={3}
      />,
      <LuStar
        strokeWidth={2}
        fill="#e17100"
        className="h-3.5 w-3.5 text-amber-600"
        key={4}
      />,
      <LuStar
        strokeWidth={2}
        fill="#e17100"
        className="h-3.5 w-3.5 text-amber-600"
        key={5}
      />,
    ],
    imageSrc: "/reviews/google-icon-A.png",
  },
  {
    text: "Servicii rapide și de calitate. Au rezolvat o problemă cu infiltrațiile, nu mai am nicio grijă!",
    name: "Andreea Ionescu",
    stars: [
      <LuStar
        strokeWidth={2}
        fill="#e17100"
        className="h-3.5 w-3.5 text-amber-600"
        key={1}
      />,
      <LuStar
        strokeWidth={2}
        fill="#e17100"
        className="h-3.5 w-3.5 text-amber-600"
        key={2}
      />,
      <LuStar
        strokeWidth={2}
        fill="#e17100"
        className="h-3.5 w-3.5 text-amber-600"
        key={3}
      />,
      <LuStar
        strokeWidth={2}
        fill="#e17100"
        className="h-3.5 w-3.5 text-amber-600"
        key={4}
      />,
      <LuStar
        strokeWidth={2}
        fill="#e17100"
        className="h-3.5 w-3.5 text-amber-600"
        key={5}
      />,
    ],
    imageSrc: "/reviews/google-icon-A (1).png",
  },
  {
    text: "Cei mai buni! Renovarea fațadei a depășit așteptările. Lucrarea a fost finalizată la timp.",
    name: "Cristian Dumitru",
    stars: [
      <LuStar
        strokeWidth={2}
        fill="#e17100"
        className="h-3.5 w-3.5 text-amber-600"
        key={1}
      />,
      <LuStar
        strokeWidth={2}
        fill="#e17100"
        className="h-3.5 w-3.5 text-amber-600"
        key={2}
      />,
      <LuStar
        strokeWidth={2}
        fill="#e17100"
        className="h-3.5 w-3.5 text-amber-600"
        key={3}
      />,
      <LuStar
        strokeWidth={2}
        fill="#e17100"
        className="h-3.5 w-3.5 text-amber-600"
        key={4}
      />,
      <LuStar
        strokeWidth={2}
        fill="#e17100"
        className="h-3.5 w-3.5 text-amber-600"
        key={5}
      />,
    ],
    imageSrc: "/reviews/google-icon-C.png",
  },
  {
    text: "Profesioniști de la prima discuție. Mi-au oferit soluții personalizate. Sunt mulțumit de rezultat!",
    name: "Daniela Mihai",
    stars: [
      <LuStar
        strokeWidth={2}
        fill="#e17100"
        className="h-3.5 w-3.5 text-amber-600"
        key={1}
      />,
      <LuStar
        strokeWidth={2}
        fill="#e17100"
        className="h-3.5 w-3.5 text-amber-600"
        key={2}
      />,
      <LuStar
        strokeWidth={2}
        fill="#e17100"
        className="h-3.5 w-3.5 text-amber-600"
        key={3}
      />,
      <LuStar
        strokeWidth={2}
        fill="#e17100"
        className="h-3.5 w-3.5 text-amber-600"
        key={4}
      />,
      <LuStar
        strokeWidth={2}
        fill="#e17100"
        className="h-3.5 w-3.5 text-amber-600"
        key={5}
      />,
    ],
    imageSrc: "/reviews/google-icon-D.png",
  },
  {
    text: "O experiență excelentă! Echipa a fost amabilă și a lucrat cu grijă. Fațada noastră arată ca nouă.",
    name: "Elena Vasilescu",
    stars: [
      <LuStar
        strokeWidth={2}
        fill="#e17100"
        className="h-3.5 w-3.5 text-amber-600"
        key={1}
      />,
      <LuStar
        strokeWidth={2}
        fill="#e17100"
        className="h-3.5 w-3.5 text-amber-600"
        key={2}
      />,
      <LuStar
        strokeWidth={2}
        fill="#e17100"
        className="h-3.5 w-3.5 text-amber-600"
        key={3}
      />,
      <LuStar
        strokeWidth={2}
        fill="#e17100"
        className="h-3.5 w-3.5 text-amber-600"
        key={4}
      />,
      <LuStar
        strokeWidth={2}
        fill="#e17100"
        className="h-3.5 w-3.5 text-amber-600"
        key={5}
      />,
    ],
    imageSrc: "/reviews/google-icon-E.png",
  },
  {
    text: "Calitate și seriozitate! Fațada a fost izolată, iar consumul la încălzire a scăzut considerabil.",
    name: "Laurențiu Stoian",
    stars: [
      <LuStar
        strokeWidth={2}
        fill="#e17100"
        className="h-3.5 w-3.5 text-amber-600"
        key={1}
      />,
      <LuStar
        strokeWidth={2}
        fill="#e17100"
        className="h-3.5 w-3.5 text-amber-600"
        key={2}
      />,
      <LuStar
        strokeWidth={2}
        fill="#e17100"
        className="h-3.5 w-3.5 text-amber-600"
        key={3}
      />,
      <LuStar
        strokeWidth={2}
        fill="#e17100"
        className="h-3.5 w-3.5 text-amber-600"
        key={4}
      />,
      <LuStar
        strokeWidth={2}
        fill="#e17100"
        className="h-3.5 w-3.5 text-amber-600"
        key={5}
      />,
    ],
    imageSrc: "/reviews/google-icon-L.png",
  },
  {
    text: "Am fost foarte mulțumit de vopsirea fațadei. Culoarea este uniformă și rezistentă. Recomand!",
    name: "Maria Radu",
    stars: [
      <LuStar
        strokeWidth={2}
        fill="#e17100"
        className="h-3.5 w-3.5 text-amber-600"
        key={1}
      />,
      <LuStar
        strokeWidth={2}
        fill="#e17100"
        className="h-3.5 w-3.5 text-amber-600"
        key={2}
      />,
      <LuStar
        strokeWidth={2}
        fill="#e17100"
        className="h-3.5 w-3.5 text-amber-600"
        key={3}
      />,
      <LuStar
        strokeWidth={2}
        fill="#e17100"
        className="h-3.5 w-3.5 text-amber-600"
        key={4}
      />,
      <LuStar
        strokeWidth={2}
        fill="#e17100"
        className="h-3.5 w-3.5 text-amber-600"
        key={5}
      />,
    ],
    imageSrc: "/reviews/google-icon-M.png",
  },
  {
    text: "Echipă de profesioniști care își respectă promisiunile. Au reparat fațada în timp record.",
    name: "Sorin Nicolae",
    stars: [
      <LuStar
        strokeWidth={2}
        fill="#e17100"
        className="h-3.5 w-3.5 text-amber-600"
        key={1}
      />,
      <LuStar
        strokeWidth={2}
        fill="#e17100"
        className="h-3.5 w-3.5 text-amber-600"
        key={2}
      />,
      <LuStar
        strokeWidth={2}
        fill="#e17100"
        className="h-3.5 w-3.5 text-amber-600"
        key={3}
      />,
      <LuStar
        strokeWidth={2}
        fill="#e17100"
        className="h-3.5 w-3.5 text-amber-600"
        key={4}
      />,
      <LuStar
        strokeWidth={2}
        fill="#e17100"
        className="h-3.5 w-3.5 text-amber-600"
        key={5}
      />,
    ],
    imageSrc: "/reviews/google-icon-S.png",
  },
  {
    text: "Colaborare excelentă! Fiecare detaliu a fost tratat cu atenție, iar rezultatul este minunat.",
    name: "Victor Georgescu",
    stars: [
      <LuStar
        strokeWidth={2}
        fill="#e17100"
        className="h-3.5 w-3.5 text-amber-600"
        key={1}
      />,
      <LuStar
        strokeWidth={2}
        fill="#e17100"
        className="h-3.5 w-3.5 text-amber-600"
        key={2}
      />,
      <LuStar
        strokeWidth={2}
        fill="#e17100"
        className="h-3.5 w-3.5 text-amber-600"
        key={3}
      />,
      <LuStar
        strokeWidth={2}
        fill="#e17100"
        className="h-3.5 w-3.5 text-amber-600"
        key={4}
      />,
      <LuStar
        strokeWidth={2}
        fill="#e17100"
        className="h-3.5 w-3.5 text-amber-600"
        key={5}
      />,
    ],
    imageSrc: "/reviews/google-icon-V.png",
  },
];

const FirstColumn = testimonials.slice(0, 3);
const SecondColumn = testimonials.slice(3, 6);
const ThirdColumn = testimonials.slice(6, 9);

const TestimonialsColumn = (props: {
  className?: string;
  testimonials: typeof testimonials;
  duration?: number;
}) => (
  <div className={props.className}>
    <motion.div
      animate={{
        translateY: "-50%",
      }}
      transition={{
        duration: props.duration || 10,
        repeat: Infinity,
        ease: "linear",
        repeatType: "loop",
      }}
      className="flex flex-col gap-6 pb-6"
    >
      {[...new Array(2)].fill(0).map((_, index) => (
        <React.Fragment key={index}>
          {props.testimonials.map(({ text, imageSrc, name, stars }) => (
            <div
              className="w-full max-w-xs rounded-3xl border border-[#222222]/10 p-10 shadow-[0_7px_14px_#eaeaea]"
              key={name}
            >
              <div className="text-justify">{text}</div>
              <div className="mt-5 flex items-center gap-3">
                <Image
                  src={imageSrc}
                  width={1000}
                  height={1000}
                  alt={name}
                  className="h-10 w-10 rounded-full"
                />
                <div className="flex flex-col">
                  <div className="font-medium leading-5 tracking-tight">
                    {name}
                  </div>
                  <div className="inline-flex leading-5">{stars}</div>
                </div>
              </div>
            </div>
          ))}
        </React.Fragment>
      ))}
    </motion.div>
  </div>
);

export default function Reviews() {
  return (
    <section id="reviews" className="pb-24">
      <div className="laptop:px-20 container mx-auto px-4 py-6">
        <div className="flex flex-col items-center">
          <div className="mx-auto flex flex-col items-center">
            <div className="flex justify-center">
              <div className="inline-flex rounded-lg border border-[#222]/25 px-3 py-1 font-mono text-sm tracking-tight">
                Recenzii & Testimoniale
              </div>
            </div>
            <h2 className="section-title">Ce spun clienții noștri</h2>
            <p className="tablet:w-[65%] laptop-l:w-full mt-5 text-center text-xl tracking-tight [text-align-last:center]">
              Nu lua doar cuvântul nostru pe încredere. Ascultă de la
              utilizatori reali care au experimentat diferența.
            </p>
          </div>
        </div>
        <div className="mt-15 flex max-h-[738px] justify-center gap-6 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black,black_75%,transparent)]">
          <TestimonialsColumn testimonials={FirstColumn} duration={15} />
          <TestimonialsColumn
            testimonials={SecondColumn}
            className="tablet:block hidden"
            duration={19}
          />
          <TestimonialsColumn
            testimonials={ThirdColumn}
            className="laptop:block hidden"
            duration={17}
          />
        </div>
      </div>
    </section>
  );
}
