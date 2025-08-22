"use client";
import { motion } from "motion/react";
import { LuDot } from "react-icons/lu";
import { twMerge } from "tailwind-merge";
import Link from "next/link";

const PricingTiers = [
  {
    title: "Basic",
    monthlyPrice: "550 MDL",
    buttonText: "Obține oferta.",
    popular: false,
    inverse: false,
    features: [
      "Curățare geamuri",
      "Inspecție de bază",
      "Consultație gratuită",
      "Deplasare în Chișinău",
      "Garanție 6 luni",
      "Echipament profesional",
    ],
  },
  {
    title: "Standard",
    monthlyPrice: "750 MDL",
    buttonText: "Obține oferta.",
    popular: true,
    inverse: true,
    features: [
      "Toate serviciile Basic +",
      "Vopsitorie exterioară",
      "Reparații minore",
      "Deplasare în toată Moldova",
      "Garanție 1 an",
      "Consultații nelimitate",
    ],
  },
  {
    title: "Premium",
    monthlyPrice: "950 MDL",
    buttonText: "Obține oferta.",
    popular: false,
    inverse: false,
    features: [
      "Toate serviciile Standard +",
      "Renovare completă",
      "Prioritate în programare",
      "Garanție 2 ani",
      "Asistență tehnică 2 ani",
      "Acces prioritar la materiale",
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24">
      <div className="laptop:px-13 container mx-auto px-4 py-6">
        <h2 className="section-title">Găsește Planul Perfect</h2>
        <p className="mobile-l:text-xl mt-5 text-center text-lg tracking-tight [text-align-last:center]">
          Alegeți planul potrivit pentru proiectul dumneavoastră.
        </p>
        <div className="laptop:flex-row laptop:flex-end laptop:justify-center mt-10 flex flex-col items-center gap-6">
          {PricingTiers.map(
            ({
              title,
              monthlyPrice,
              buttonText,
              popular,
              inverse,
              features,
            }) => (
              <div
                key={title}
                className={twMerge(
                  "w-full max-w-xs rounded-xl border border-[#f1f1f1] p-10 shadow-[0_7px_14px_#eaeaea]",
                  inverse === true &&
                    "from-vertidigris-400 via-vertidigris-300 to-vertidigris-700 bg-gradient-to-b",
                )}
              >
                <div className="flex items-center justify-between">
                  <h3
                    className={twMerge(
                      "text-lg font-medium text-black/50",
                      inverse === true && "text-white/50",
                    )}
                  >
                    {title}
                  </h3>
                  {popular === true && (
                    <div className="inline-flex rounded-xl border border-white/20 bg-white/10 px-4 py-0.5 text-sm">
                      <motion.span
                        animate={{
                          backgroundPositionX: "-100%",
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "linear",
                          repeatType: "loop",
                        }}
                        className="bg-[linear-gradient(to_right,#ffadad,#ffd6a5,#fdffb6,#caffbf,#9bf6ff,#a0c4ff,#bdb2ff,#ffd6a5,#fdffb6,#caffbf,#9bf6ff,#a0c4ff,#ffadad)] bg-clip-text font-medium text-transparent [background-size:200%]"
                      >
                        Popular
                      </motion.span>
                    </div>
                  )}
                </div>
                <div>
                  <div className="mt-[30px] flex items-baseline gap-1">
                    <span
                      className={twMerge(
                        "text-4xl font-medium leading-none tracking-tighter text-black/90",
                        inverse === true && "text-white/90",
                      )}
                    >
                      {monthlyPrice}
                    </span>
                    <span
                      className={twMerge(
                        "font-medium tracking-tight text-black/50",
                        inverse === true && "text-white/50",
                      )}
                    >
                      /per m²
                    </span>
                  </div>
                  <Link
                    className={twMerge(
                      "from-vertidigris-400 to-vertidigris-600 mt-[30px] inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-b px-3 py-2 text-center text-white",
                      inverse === true &&
                        "from-vertidigris-100 to-white text-black",
                    )}
                    href="#contact"
                  >
                    {buttonText}
                  </Link>
                  <ul className="mt-8 flex flex-col gap-5">
                    {features.map((feature, index) => (
                      <li
                        key={index}
                        className={twMerge(
                          "flex items-center gap-2 text-sm text-black/75",
                          inverse && "text-white/75",
                        )}
                      >
                        <LuDot strokeWidth={3.25} className="h-5 w-5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
