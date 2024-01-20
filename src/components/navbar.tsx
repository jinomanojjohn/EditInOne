import React from "react";
import {
  Navbar as MTNavbar,
  Collapse,
  Button,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import {
  RectangleStackIcon,
  UserCircleIcon,
  XMarkIcon,
  Bars3Icon,
  LockClosedIcon,
  UserPlusIcon,
} from "@heroicons/react/24/solid";
import { APPLICATIONNAME } from "@/util/env";

const NAV_MENU = [
  {
    name: "PDF Tools",
    icon: RectangleStackIcon,
    href: "/pdf-tools",
  },
  {
    name: "Image Tools",
    icon: UserCircleIcon,
    href: "/image-tools",
  },
  // {
  //   name: "Docs",
  //   icon: CommandLineIcon,
  //   href: "https://www.material-tailwind.com/docs/react/installation",
  // },
];

interface NavItemProps {
  children: React.ReactNode;
  href?: string;
}

function NavAuthButtons() {
  return (
    <>    
      <a href="/login">
        <Button ripple={true} className="rounded-full flex items-center gap-2 border-primary-buttonBackground text-primary-buttonBackground" variant="outlined" ><UserCircleIcon className="h-5 w-5"/>Login</Button>
      </a>
      <a href="/signup">
        <Button ripple={true} className="rounded-full flex items-center gap-2 bg-primary-buttonBackground text-primary-buttonTextColor" ><UserPlusIcon className="h-5 w-5" />Sign Up</Button>
      </a>
    </>
  );
}

function NavItem({ children, href }: NavItemProps) {
  return (
    <li>
      <Typography
        as="a"
        href={href || "#"}
        variant="paragraph"
        color="gray"
        className=" flex items-center gap-2 font-medium text-primary-buttonBackground"
      >
        {children}
      </Typography>
    </li>
  );
}

export function Navbar() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  return (
    <MTNavbar shadow={false} color="indigo" fullWidth className="border-0 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <Typography
          as="a"
          href="https://www.material-tailwind.com"
          target="_blank"
          color="white"
          className="text-2xl font-bold"
        >
          {APPLICATIONNAME}
        </Typography>
        <ul className="ml-10 hidden items-center gap-8 lg:flex">
          {NAV_MENU.map(({ name, icon: Icon, href }) => (
            <NavItem key={name} href={href}>
              <Icon className="h-5 w-5" />
              {name}
            </NavItem>
          ))}
        </ul>
        <div className="hidden items-center gap-2 lg:flex">
          <NavAuthButtons />
        </div>
        <IconButton
          variant="text"
          color="white"
          onClick={handleOpen}
          className="ml-auto inline-block lg:hidden"
        >
          {open ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </IconButton>
      </div>
      <Collapse open={open}>
        <div className="container mx-auto mt-3 border-t border-gray-200 px-2 pt-4">
          <ul className="flex flex-col gap-4">
            {NAV_MENU.map(({ name, icon: Icon }) => (
              <NavItem key={name}>
                <Icon className="h-5 w-5" />
                {name}
              </NavItem>
            ))}
          </ul>
          <div className="mt-6 mb-4 flex items-center gap-2">
            <NavAuthButtons />
          </div>
        </div>
      </Collapse>
    </MTNavbar>
  );
}

export default Navbar;
