import React from "react";

const Giulia = () => {
  return (
    <>
      <div className="min-h-96 bg-bb" id="options">
        <div className="container text-center text-white py-24  lg:px-20">
          <h1 className="semi text-2xl lg:text-4xl uppercase pb-6">
            2 ans d&apos;entretien ou 20.000 km offerts .
          </h1>
          <p>
            Du 1er Juin au 31 Juillet, découvrez nos ventes privées et profitez
            de l&apos;offre exclusive sur l&apos;Alfa Romeo Giulia à partir de
            439 000 DHS. En plus de cette remise exceptionnelle, bénéficiez de 2
            ans d&apos;entretien offerts ou sur 20 000 km. <br />
            Ne manquez pas cette opportunité unique ! Profitez de notre offre
            dès maintenant et laissez-vous séduire par l&apos;excellence
            italienne.
          </p>
          <p className="text-sm">
            Offre valable dans la limite du stock disponible*.
          </p>
        </div>
        <div className="container px-20 flex items-center">
          <hr className="w-96 bg-redd h-1 border-0" />
          <h2 className="semi pl-5 text-2xl text-white">Options</h2>
        </div>
        <div className="container grid grid-cols-1 lg:grid-cols-4 items-center justify-center py-24 bg-bb">
          <div className="flex lg:pt-7 flex-col gap-3 items-center justify-center text-center text-white pb-8 sm:pb-0  md:px-7">
            <img src="/ico1.png" />
            <h2 className="semi text-xl">
              Calandre trilobo unique d&apos;Alfa Romeo
            </h2>
            <p>Un design italien dans le plus pour style Alfa Romeo</p>
          </div>
          <div className="flex flex-col gap-3 items-center justify-center text-center text-white pb-8 sm:pb-0  md:px-7">
            <img src="/ico2.png" />
            <h2 className="semi text-xl">
              Systèmes avancés d&apos;aide à la conduite
            </h2>
            <p>Conduite autonome de niveau 2</p>
          </div>
          <div className="flex  lg:pt-10 flex-col gap-3 items-center justify-center text-center text-white pb-8 sm:pb-0  md:px-7">
            <img src="/ico3.png" />
            <h2 className="semi text-xl">
              Répartition optimale du poids 50/50
            </h2>
            <p>
              Un équilibre parfait pour un plaisir de conduite sans compromis
            </p>
          </div>
          <div className="flex -mt-4 flex-col gap-3 items-center justify-center text-center text-white pb-10 sm:pb-0  md:px-7">
            <img src="/ico4.png" />
            <h2 className="semi text-xl">Suspension Alfa™ Link</h2>
            <p>Haute précision et confort maximal</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Giulia;
