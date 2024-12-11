import {
  Sheet,
  SheetContent,
  // SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { EllipsisVertical } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

const MobileHeader = () => {
  const navigation = [
    { title: "Customers", path: "#" },
    { title: "Careers", path: "#" },
    { title: "Guides", path: "#" },
    { title: "Partners", path: "#" },
    { title: "Teams", path: "#" },
    { title: "Blog", path: "#" },
  ];
  return (
    <Sheet>
      <SheetTrigger>
        <Button variant="outline" size="icon">
          <EllipsisVertical className="w-5 h-5" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>
            <Link href="/" className="block text-primary text-xl font-bold">
              KaziConnect.
            </Link>
          </SheetTitle>
        </SheetHeader>
        <nav className="mt-4">
          <ul className="flex flex-col gap-4 items-center">
            {navigation.map((item) => (
              <Link key={item.title} href={item.path}>
                {item.title}
              </Link>
            ))}
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  );
};
export default MobileHeader;
