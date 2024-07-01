import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

function Contact() {
  const navigate = useNavigate();
  async function onSubmit(event) {
    event.preventDefault();
    // Set loading to true when the request starts

    try {
      const formData = new FormData(event.currentTarget);
      console.log(event.currentTarget);
      //  const response = await fetch(
      //    "https://script.google.com/macros/s/AKfycbyieQDJybBwLk4EkGnXsR9Mj57sFL_sJwxfiMkeffUaguIHVKD2ehuYeG7qYm-Rs_IR/exec",
      //    {
      //      method: "POST",
      //      body: formData,
      //      cache: "no-cache",
      //    }
      //  );

      // Handle response if necessary
      //  const data = await response.json();
    } catch (error) {
      // Handle error if necessary
      console.error(error);
    } finally {
      toast.success("Envoyé avec succès !");
      setTimeout(() => {
        navigate(0);
      }, 3000);
    }
  }
  return (
    <div className="bg-bb">
      <div
        className="container flex flex-col items-center justify-center py-20"
        id="contact"
      >
        <div className="container lg:px-20 pb-10 flex items-center">
          <hr className="w-96 bg-redd h-1 border-0" />
          <h2 className="semi pl-5 text-2xl text-white">Contact</h2>
        </div>
        <form
          action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&orgId=00D8d000009q2y7"
          method="POST"
          className="md:w-3/6"
          onSubmit={(e) => onSubmit(e)}
        >
          <input type="hidden" name="oid" value="00D8d000009q2y7" />
          {/* <input
              type="hidden"
              name="retURL"
              value="https://www.stellantis.com"
            /> */}
          <input
            type="hidden"
            name="recordType"
            id="recordType"
            value="0128d000000DtwF"
          />
          <input
            type="hidden"
            id="00N8d00000UVYP7"
            name="00N8d00000UVYP7"
            value="1"
          />
          <input
            type="hidden"
            id="00N8d00000UVYOu"
            name="00N8d00000UVYOu"
            value="83"
          />
          <input
            type="hidden"
            id="00N8d00000UVYPn"
            name="00N8d00000UVYPn"
            value="83-620"
          />
          <input
            type="hidden"
            id="00NTv000000qAOQ"
            name="00NTv000000qAOQ"
            value="701Tv000006ZdHfIAK"
          />
          <input
            id="lead_source"
            name="lead_source"
            type="hidden"
            value="event_website"
          />
          <br />
          <label htmlFor="salutation" className="semi text-white text-2xl ">
            Civilité
          </label>
          <br />
          <select id="salutation" name="salutation" className="w-full h-8 mb-2">
            <option value="">- Aucun -</option>
            <option value="Mr.">Mr.</option>
            <option value="Ms.">Ms.</option>
            <option value="Mrs.">Mrs.</option>
            <option value="Dr.">Dr.</option>
            <option value="Prof.">Prof.</option>
          </select>
          <br />
          <label htmlFor="first_name" className="semi text-white text-2xl">
            Prénom
          </label>
          <br />
          <input
            id="first_name"
            maxLength="40"
            name="first_name"
            size="20"
            type="text"
            className="w-full h-8 mb-2"
            required
          />
          <br />
          <label htmlFor="last_name" className="semi text-white text-2xl">
            Nom
          </label>
          <br />
          <input
            id="last_name"
            maxLength="80"
            name="last_name"
            size="20"
            type="text"
            className="w-full h-8 mb-2"
            required
          />
          <br />
          <label htmlFor="mobile" className="semi text-white text-2xl ">
            Téléphone mobile
          </label>
          <br />
          <input
            id="mobile"
            maxLength="40"
            name="mobile"
            size="20"
            type="number"
            className="w-full h-8 mb-2"
            required
          />
          <br />
          <label htmlFor="email" className="semi text-white text-2xl ">
            Adresse e-mail
          </label>
          <br />
          <input
            id="email"
            maxLength="80"
            name="email"
            size="20"
            type="text"
            className="w-full h-8 mb-2"
            required
          />
          <br />
          <label
            htmlFor="00NTv0000008h9V"
            className="semi text-white text-2xl "
          >
            Showroom
          </label>
          <br />
          <select
            id="00NTv0000008h9V"
            maxLength="50"
            name="00NTv0000008h9V"
            className="w-full h-8 mb-2"
            required
          >
            <option value="" hidden>
              Séléctionner un showroom..
            </option>
            <option value="Orbis Rabat">Orbis Rabat</option>
            <option value="Orbis Tanger">Orbis Tanger</option>
            <option value="Auto Hall Casablanca">Auto Hall Casablanca</option>
            <option value="Auto Hall Marrakech">Auto Hall Marrakech</option>
            <option value="Auto Hall Fes">Auto Hall Fes</option>
            <option value="La continentale Casablanca">
              La continentale Casablanca
            </option>
            <option value="La continentale El Jadida">
              La continentale El Jadida
            </option>
            <option value="Fenie Brossette Agadir">
              Fenie Brossette Agadir
            </option>
            <option value="Maniss Auto Marrakech">Maniss Auto Marrakech</option>
            <option value="Stellantis & You Bouskoura">
              Stellantis & You Bouskoura
            </option>
            <option value="Sais Auto Meknes">Sais Auto Meknes</option>
          </select>
          {/* <input
            id="00NTv0000008h9V"
            maxLength="50"
            name="00NTv0000008h9V"
            size="20"
            type="text"
            className="w-full h-8 mb-2"
          /> */}
          <br />
          <label htmlFor="city" className="semi text-white text-2xl ">
            Ville
          </label>{" "}
          <br />
          <input
            id="city"
            maxLength="40"
            name="city"
            size="20"
            type="text"
            className="w-full h-8 mb-2"
            required
          />
          <br />
          <br />
          <input
            type="submit"
            name="submit"
            className="semi text-black w-48 h-10 bg-white hover:bg-slate-400 cursor-pointer"
          />
        </form>
      </div>
      <div className="grid  lg:grid-cols-3 py-10">
        <div></div>
        <div></div>
        <div className="flex justify-center items-center gap-x-3">
          <p className="semi text-white">Suivez-nous</p>
          <a
            href="https://www.facebook.com/alfaromeomaroc"
            className="cursor-pointer"
          >
            <FaFacebook size={20} color="white" />
          </a>
          <a
            href="https://www.instagram.com/alfaromeo_morocco/?igshid=YmMyMTA2M2Y%3D"
            className="cursor-pointer"
          >
            <FaInstagram size={20} color="white" />
          </a>
          <a
            href="https://www.linkedin.com/company/alfa-romeo-maroc/"
            className="cursor-pointer"
          >
            <FaLinkedin size={20} color="white" />
          </a>
          <a
            href="https://www.youtube.com/channel/UC0wCJjBy869t76oBZ62Q41w"
            className="cursor-pointer"
          >
            <FaYoutube size={20} color="white" />
          </a>
        </div>
      </div>
      <ToastContainer
        position="bottom-right"
        hideProgressBar={true}
        theme="light"
        autoClose={2000}
      />
    </div>
  );
}

export default Contact;
