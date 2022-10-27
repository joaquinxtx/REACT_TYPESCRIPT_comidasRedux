export const Footer = () => {
  return (
    <footer className=" w-full fixed bottom-0 p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
      <span className="text-sm mt-10 text-gray-500 sm:text-center dark:text-gray-400">
        © 2022{" "}
        <a
          href="https://portafolio-joaquin.vercel.app/"
          className="hover:underline"
        >
          Joaquin Toledo™
        </a>
        . All Rights Reserved.
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
          <a
            href="thejotex1998@gmail.com"
            className="mr-4 hover:underline md:mr-6 "
          >
            Gmail
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/joaquinfrontend/"
            className="mr-4 hover:underline md:mr-6"
          >
            Linkedin
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/joaquina.toledo.90/"
            className="mr-4 hover:underline md:mr-6"
          >
            Facebook
          </a>
        </li>
        <li>
          <a
            href="https://portafolio-joaquin.vercel.app/"
            className="hover:underline"
          >
            Portfolio
          </a>
        </li>
      </ul>
    </footer>
  );
};
