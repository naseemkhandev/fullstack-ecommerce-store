import { BiWorld } from "react-icons/bi";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";
import { Link } from "react-router-dom";
import { Mail, MapPin } from "lucide-react";

import {
  FooterLinks1,
  FooterLinks2,
  categories,
} from "@/constants/footerLinks";

const FooterLinks = ({ title, links }) => {
  return (
    <div>
      <h2 className="whitespace-nowrap text-xl sm:text-xl font-medium text-gray-600 capitalize mb-5">
        {title}
      </h2>
      <div className="flex flex-col gap-5">
        {links.map((link) => (
          <Link
            key={link.name}
            to={`${link.link}`}
            target="_blank"
            className="text-gray-500 hover:text-primary dark:text-white antialiased text-[.9rem] font-medium hover:underline whitespace-nowrap"
          >
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

const SocialIcons = ({ link, icon: Icon }) => {
  return (
    <Link
      to={link}
      target="_blank"
      className="text-lg bg-[#4B5966] rounded-lg hover:bg-primary hover:text-white p-3 text-white"
    >
      <Icon />
    </Link>
  );
};

const Footer = () => {
  return (
    <div className="mt-10 pt-10 md:pt-16 border-t">
      <div className="container mx-auto px-3 md:px-5 flex items-start justify-between flex-wrap lg:flex-nowrap gap-5 md:gap-10">
        <div className="w-full lg:max-w-80 flex flex-col gap-5 mb-5 lg:mb-0">
          <Link to="/">
            <img src="/images/logo.png" alt="logo" className="w-36" />
          </Link>

          <p className="text-gray-500 antialiased text-base font-medium">
            Grabit is the biggest market of grocery products. Get your daily
            needs from our store.
          </p>

          <div className="flex items-center gap-2 lg:my-4">
            <SocialIcons
              link="https://www.linkedin.com/in/naseemkhann"
              icon={FaLinkedin}
            />
            <SocialIcons
              link="https://github.com/NaseemKhan005"
              icon={FaGithub}
            />
            <SocialIcons
              link="https://www.upwork.com/freelancers/~01a320b86f9044dd91?viewMode=1"
              icon={SiUpwork}
            />
            <SocialIcons link="https://naseemkhan.vercel.app/" icon={BiWorld} />
          </div>
        </div>

        <FooterLinks title="Category" links={categories.slice(0, 6)} />
        <FooterLinks title="Company" links={FooterLinks1} />
        <FooterLinks title="Account" links={FooterLinks2} />

        <div className="flex flex-col gap-5 md:max-w-72">
          <h2 className="whitespace-nowrap text-xl sm:text-xl font-medium text-gray-600 capitalize">
            Contact
          </h2>

          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-3">
              <MapPin className="stroke-[1.5px] block size-6 sm:size-10 text-primary" />
              <p className="text-gray-500 antialiased text-base font-medium">
                2548 Broaddus Maple Court, Madisonville KY 4783, USA.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <FaWhatsapp className="stroke-[1px] text-xl text-primary" />
              <Link
                to="tel:+923444170400"
                className="text-gray-500 antialiased text-base font-medium"
              >
                +92 344 4170400
              </Link>
            </div>

            <div className="flex items-center gap-3">
              <Mail className="stroke-[1.5px] text-primary size-6" />
              <Link
                to="mailto:devnaseemkhan@gmail.com"
                className="text-gray-500 antialiased text-base font-medium"
              >
                devnaseemkhan@gmail.com
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-2 lg:my-4">
            <SocialIcons
              link="https://www.linkedin.com/in/naseemkhann"
              icon={FaLinkedin}
            />
            <SocialIcons
              link="https://github.com/naseemkhandev"
              icon={FaGithub}
            />
            <SocialIcons
              link="https://www.upwork.com/freelancers/~01a320b86f9044dd91?viewMode=1"
              icon={SiUpwork}
            />
            <SocialIcons link="https://naseemkhan.vercel.app/" icon={BiWorld} />
          </div>
        </div>
      </div>

      <div className="text-gray-500 px-5 antialiased text-sm md:text-base font-medium text-center py-5 border-t mt-5 border-gray-100 bg-gray-50">
        <p>
          © Grabit {new Date().getFullYear()} - all Rights Reserved, Created by{" "}
          <Link
            to="https://github.com/naseemkhandev"
            target="_blank"
            className="hover:underline text-primary"
          >
            Naseem Khan
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Footer;
