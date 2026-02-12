import { Bell } from "lucide-react";
import { Button } from "../button";
import User from "./User";
import { SidebarTrigger } from "../sidebar";
import { ModeToggle } from "../ModeToggle";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full">
      <div className="flex items-center justify-between px-4">
        <SidebarTrigger />

        <div className="flex items-center justify-end gap-3">
          <ModeToggle />
          <Button variant="ghost" className="cursor-pointer">
            <Bell />
          </Button>
          <User />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
