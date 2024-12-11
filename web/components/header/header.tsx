import Link from "next/link";
import { Button } from "../ui/button";
import MobileHeader from "./mobile-header";

const Header = () => {
  const navigation = [
    { title: "Customers", path: "#" },
    { title: "Careers", path: "#" },
    { title: "Guides", path: "#" },
    { title: "Partners", path: "#" },
    { title: "Teams", path: "#" },
    { title: "Blog", path: "#" },
  ];
  return (
    <header className="sticky top-0 z-10 bg-background backdrop-filter backdrop-blur-lg bg-opacity-30 border-b">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <Link href="/" className="block text-primary text-xl font-bold">
              KaziConnect.
            </Link>
          </div>
          <div className="hidden md:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-sm">
                {navigation.map((item) => (
                  <Link
                    key={item.title}
                    href={item.path}
                    className="text-primary"
                  >
                    {item.title}
                  </Link>
                ))}
              </ul>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <div>
              <Link href="/login">
                <Button>Get Started</Button>
              </Link>
            </div>
            <div className="block md:hidden">
              <MobileHeader />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
