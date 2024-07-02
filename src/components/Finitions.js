import React from "react";
import {
  Link as ScrollLink,
  animateScroll as scroll,
  scroller,
} from "react-scroll";

const Finitions = () => {
  return (
    <div className="bg-bb pb-96" id="finitions">
      <div className="container px-20 flex items-center">
        <hr className="w-96 bg-redd h-1 border-0" />
        <h2 className="semi pl-5 text-2xl text-white">Finitions</h2>
      </div>
      <div className="container relative py-24 grid grid-cols-1  lg:grid-cols-3">
        <div className="relative h-96 mx-10 flex flex-col items-center">
          <div className="w-60 h-96">
            <img
              about="image"
              src="/CAR Section/Sprint.png"
              alt="sprint"
              className="bg-cover h-full w-full"
              height={2000}
              width={2000}
            />
          </div>
          <div className="absolute -left-4 top-6 flex flex-col">
            <h2 className="semi text-3xl  text-white">
              GIULIA <br /> SPRINT
            </h2>
            <p className="text-xl text-white">Sportive et audacieuse</p>
          </div>
          <div className="absolute -bottom-16">
            <img
              alt="sprint"
              about="sprint"
              src="/CAR Section/sprint-car.png"
              className="scale-110 md:scale-100"
            />
          </div>
          <div className="mt-14 text-center text-white flex flex-col gap-3 items-center justify-center">
            <p>Caméra de recul avec lignes de guidage dynamiques</p>
            <p>Combiné d&apos;instruments zTFT de 12,3”</p>
            <p>Jantes 18&apos;&apos; foncées</p>
            <p>Sièges en cuir techno/tissu</p>
          </div>
          <div className="py-10 text-center text-white">
            <p className="semi text-xl line-through">465 000 DHS</p>
            <p className="semi text-3xl ">439 000 DHS</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <ScrollLink
              to="contact"
              spy={true}
              smooth={true}
              duration={1500}
              offset={0}
            >
              <button className="semi text-black text-xl w-80 h-14 bg-slate-50">
                PROFITER DE L&apos;OFFRE
              </button>
            </ScrollLink>
            <a
              className="text-white underline pt-3"
              href="/Fiche_technique_Giulia_MCA_2023.pdf"
              download
            >
              <button className="underline">
                Télécharger la fiche technique
              </button>
            </a>
          </div>
        </div>
        <div className="relative mt-[580px] lg:mt-0 h-96 mx-10 flex flex-col items-center">
          <div className="w-60 h-96">
            <img
              about="image"
              src="/CAR Section/Veloce.png"
              alt="veloce"
              className="bg-cover h-full w-full"
              height={2000}
              width={2000}
            />
          </div>
          <div className="absolute -left-4 top-6 flex flex-col">
            <h2 className="semi text-3xl  text-white">
              GIULIA <br /> VELOCE
            </h2>
            <p className="text-xl text-white">Performante et efficiente</p>
          </div>
          <div className="absolute -bottom-16">
            <img
              alt="sprint"
              about="sprint"
              src="/CAR Section/veloce-car.png"
              className="scale-110 md:scale-100"
            />
          </div>
          <div className="mt-14 lg:mb-6 text-center text-white flex flex-col gap-3 items-center justify-center">
            <p>Sièges avant électriques avec réglage lombaire</p>
            <p>Jantes 19&apos;&apos; design sport</p>
            <p>Pare-chocs arrière Veloce</p>
            <p>Toit ouvrant panoramique</p>
          </div>
          <div className="py-10 text-center text-white">
            <p className="semi text-xl line-through">595 000 DHS</p>
            <p className="semi text-3xl ">545 000 DHS</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <ScrollLink
              to="contact"
              spy={true}
              smooth={true}
              duration={1500}
              offset={0}
            >
              <button className="semi text-black text-xl w-80 h-14 bg-slate-50">
                PROFITER DE L&apos;OFFRE
              </button>
            </ScrollLink>
            <a
              className="text-white underline pt-3"
              href="/Fiche_technique_Giulia_MCA_2023.pdf"
              download
            >
              <button className="underline">
                Télécharger la fiche technique
              </button>
            </a>
          </div>
        </div>
        <div className="relative mt-[580px] lg:mt-0 h-96 mx-10 flex flex-col items-center">
          <div className="w-60 h-96">
            <img
              about="image"
              src="/CAR Section/Competizione.png"
              alt="sprint"
              className="bg-cover h-full w-full"
              height={2000}
              width={2000}
            />
          </div>
          <div className="absolute -left-4 top-4 flex flex-col">
            <h2 className="semi text-3xl  text-white">GIULIA COMPETIZIONE</h2>
            <p className="text-xl text-white">Sportivité à l&apos;italienne</p>
          </div>
          <div className="absolute -bottom-16">
            <img
              alt="sprint"
              about="sprint"
              src="/CAR Section/competizione-car.png"
              className="scale-110 md:scale-100"
            />
          </div>
          <div className="mt-14 text-center text-white flex flex-col gap-3 items-center justify-center">
            <p>Aide au maintien de voie </p>
            <p>Suspension Alfa SDC (contrôle dynamique synaptique)</p>
            <p>Détecteur d&apos;angles morts actif</p>
            <p>Système sonore Harman Kardon</p>
          </div>
          <div className="py-10 text-center text-white">
            <p className="semi text-xl line-through">635 000 DHS</p>
            <p className="semi text-3xl ">579 000 DHS</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <ScrollLink
              to="contact"
              spy={true}
              smooth={true}
              duration={1500}
              offset={0}
            >
              <button className="semi text-black text-xl w-80 h-14 bg-slate-50">
                PROFITER DE L&apos;OFFRE
              </button>
            </ScrollLink>
            <a
              className="text-white underline pt-3"
              href="/Fiche_technique_Giulia_MCA_2023.pdf"
              download
            >
              <button className="underline">
                Télécharger la fiche technique
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Finitions;
