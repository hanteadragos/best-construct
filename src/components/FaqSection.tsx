"use client";
import React from "react";
import { LuPlus, LuMinus } from "react-icons/lu";
import { motion, AnimatePresence } from "motion/react";

const Items = [
  {
    question: "Ce tipuri de servicii pentru fațade oferiți?",
    answer:
      "Oferim o gamă completă de servicii pentru întreținerea și renovarea fațadelor. Acestea includ curățarea profesională a geamurilor, vopsitorie exterioară, reparații minore ale tencuielii sau ale altor elemente și proiecte de renovare completă. Ne adaptăm nevoilor fiecărui client, de la lucrări de bază la transformări complexe.",
  },
  {
    question: "Cum se calculează prețul pentru o lucrare?",
    answer:
      "Prețul este personalizat pentru fiecare proiect și depinde de mai mulți factori, cum ar fi: suprafața totală (în metri pătrați), starea actuală a fațadei, complexitatea lucrării și tipul de materiale alese. Pentru a obține un preț exact, oferim o consultație și o evaluare gratuită la fața locului.",
  },
  {
    question: "Oferiți garanție pentru lucrările efectuate?",
    answer:
      "Da, calitatea este prioritatea noastră. Toate serviciile noastre beneficiază de o perioadă de garanție. Aceasta variază în funcție de pachetul ales: 6 luni pentru pachetul Basic, 1 an pentru Standard și 2 ani pentru pachetul Premium.",
  },
  {
    question: "Cât timp durează, în medie, un proiect?",
    answer:
      "Durata unui proiect depinde de amploarea acestuia. O curățare sau o reparație minoră poate dura câteva zile, în timp ce o renovare completă poate dura câteva săptămâni. După evaluarea inițială, vă vom putea oferi un termen estimativ de finalizare.",
  },
  {
    question: "Ce fel de materiale și echipamente folosiți?",
    answer:
      "Folosim exclusiv echipamente profesionale și materiale de înaltă calitate de la producători de renume. Acest lucru ne permite să asigurăm un finisaj excepțional și o durabilitate pe termen lung a lucrărilor efectuate.",
  },
  {
    question: "Cum pot obține o ofertă de preț personalizată?",
    answer:
      "Este foarte simplu. Puteți completa formularul de contact de pe site-ul nostru sau ne puteți suna la numărul de telefon afișat. Vom programa o vizită pentru a evalua proiectul și vă vom prezenta o ofertă detaliată și transparentă, fără niciun cost sau obligație din partea dumneavoastră.",
  },
];

const AccordionItem = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div
      className="border-b border-black/30 py-7"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex items-center">
        <span className="flex-1 text-lg">{question}</span>
        {isOpen ? <LuMinus /> : <LuPlus />}
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="text-justify text-sm"
            initial={{
              opacity: 0,
              height: 0,
              marginTop: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
              marginTop: 16,
            }}
            exit={{
              opacity: 0,
              height: 0,
              marginTop: 0,
            }}
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function FAQ() {
  return (
    <section className="pb-24" id="faq">
      <div className="laptop:px-20 container mx-auto px-4 py-6">
        <h2 className="section-title">Întrebări Frecvente și Răspunsuri</h2>
        <div className="tablet:max-w-[648px] laptop:max-w-[848px] laptop-l:max-w-[948px] mx-auto mt-12">
          {Items.map(({ question, answer }, index) => (
            <AccordionItem key={index} question={question} answer={answer} />
          ))}
        </div>
      </div>
    </section>
  );
}
