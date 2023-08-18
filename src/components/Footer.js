import React from "react";
import Layout from "./Layout";
import Link from "next/link";

const Footer = () => {
  return (
    <footer
      className="w-full border-t-2 bottom-solid border-dark
    font-medium text-lg dark:text-light dark:border-light sm:text-base"
    >
      <Layout className="py-4 flex items-center justify-center lg:flex-col lg:py-6">
        <Link href="/">
          Made with{" "}
          <span className="text-primary dark:text-primaryDark text-2xl px-1">
            &#9825;
          </span>{" "}
          by Anshika Gupta
        </Link>
      </Layout>
    </footer>
  );
};

export default Footer;
