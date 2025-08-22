import Link from "next/link";
import { LuArrowUp } from "react-icons/lu";

export default function CallToAction() {
  return (
    <section className="to-vertidigris-600 bg-gradient-to-b from-white py-12">
      <div className="laptop:px-20 container mx-auto px-4 py-6">
        <h2 className="to-vertidigris-600 mobile-m:text-3xl mobile-l:text-[34px] tablet:text-5xl laptop:text-[58px] mt-6 bg-gradient-to-b from-black bg-clip-text text-center text-[25px] font-medium tracking-tighter text-transparent">
          Nu aștepta – începe astăzi!
        </h2>
        <p className="mobile-s:text-lg mobile-m:text-xl mt-5 text-center tracking-tighter">
          Tot dece ai tu nevoie este la doar un click distanță.
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <Link href="tel:068758719" className="primary-button">
            Intră în contact
          </Link>
          <Link href="/" className="secondary-button">
            <LuArrowUp
              strokeWidth={3.25}
              className="mobile-m:flex h-4.5 w-4.5 hidden text-black/75"
            />
            <span>De la început</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
