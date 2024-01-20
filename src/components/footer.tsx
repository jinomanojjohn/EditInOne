import { COMPANY } from "@/util/env";
import {
  Typography,
  IconButton,
  Input,
  Button,
} from "@material-tailwind/react";
import Link from "next/link";

const CURRENT_YEAR = new Date().getFullYear();
const LINKS = ["Company", "About-Us", "Team", "Products", "Blog"];

export function Footer() {
  return (
    <footer className="pb-5 p-10 md:pt-10">
      <div className="container flex flex-col mx-auto">
        <div className="flex flex-col md:flex-row items-center !justify-between">
          <Typography
            as="a"
            href="https://www.hexameta.in"
            target="_blank"
            variant="h6"
            className="text-primary-buttonTextColor font-poppins"
          >
            {COMPANY}
          </Typography>
          <ul className="flex justify-center my-4 md:my-0 w-max mx-auto items-center gap-4">
            {LINKS.map((link, index) => (
              <li key={index}>
                <Typography
                  as="a"
                  href={`/${link.toLowerCase()}`}
                  variant="small"
                  color="white"
                  className="font-bold font-poppins !text-gray-700 hover:!text-gray-900 transition-colors"
                >
                  {link}
                </Typography>
              </li>
            ))}
          </ul>
          <div className="flex w-fit justify-center gap-2">
            <Link href="https://www.instagram.com/hexameta.in" passHref={true}>
              <IconButton size="sm" color="indigo" variant="text">
                <i className="fa-brands fa-instagram text-lg" />
              </IconButton>
            </Link>
            <Link href="https://www.github.com/hexameta" passHref={true}>
              <IconButton size="sm" color="indigo" variant="text">
                <i className="fa-brands fa-github text-lg" />
              </IconButton>
            </Link>
          </div>
        </div>
        <Typography
          color="blue-gray"
          className="text-center mt-5 font-normal font-poppins !text-gray-700"
        >
          &copy; 2023 - {CURRENT_YEAR} Made by{" "}
          <a
            href="https://www.hexameta.in"
            className="text-primary-buttonTextColor"
            target="_blank"
          >
            {COMPANY}
          </a>
          .
        </Typography>
      </div>
    </footer>
  );
}

export default Footer;
