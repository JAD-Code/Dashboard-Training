import CardList from "@/components/CardList";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Progress } from "@/components/ui/progress";
import { BadgeCheck, BadgeInfo, BadgePlus } from "lucide-react";

const page = () => {
  return (
    <div className="">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/users">users</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>jad</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="mt-4 flex flex-col lg:flex-row gap-4">
        {/* Right Side */}
        <div className="w-full lg:w-1/3 space-y-6">
          <div className="bg-primary-foreground p-4 rounded-lg">
            <h1>User Badges</h1>
            <div className="mt-4 flex gap-4">
              <HoverCard>
                <HoverCardTrigger>
                  <BadgeCheck
                    size={32}
                    className="bg-blue-500/50 border-2 border-blue-500/30 rounded-full"
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <p>Verified User</p>
                </HoverCardContent>
              </HoverCard>
              <HoverCard>
                <HoverCardTrigger>
                  <BadgeInfo
                    size={32}
                    className="bg-red-500/50 border-2 border-red-500/30 rounded-full"
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <p>The user did not use ID Verification</p>
                </HoverCardContent>
              </HoverCard>
              <HoverCard>
                <HoverCardTrigger>
                  <BadgePlus
                    size={32}
                    className="bg-green-500/50 border-2 border-green-500/30 rounded-full"
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <p>The user had been Subscribed</p>
                </HoverCardContent>
              </HoverCard>
            </div>
          </div>
          <div className="bg-primary-foreground p-4 rounded-lg">
            User Information
            <p className="text-sm text-gray-600 mb-1">Profile Completion</p>
            <Progress value={60} />
            <div className="flex flex-col gap-4 mt-4">
              <p className="text-md">
                Username:{" "}
                <span className="text-sm text-gray-400">Jad yousef</span>
              </p>
              <p className="text-md">
                Email:{" "}
                <span className="text-sm text-gray-400">
                  jadcode9@gmail.com
                </span>
              </p>
              <p className="text-md">
                Phone:{" "}
                <span className="text-sm text-gray-400">+1 234 567 891</span>
              </p>
              <p className="text-md">
                Location:{" "}
                <span className="text-sm text-gray-400">Damascus</span>
              </p>
              <p className="text-md">
                Role: <Badge>Admin</Badge>
              </p>
            </div>
          </div>
          <div className="bg-primary-foreground p-4 rounded-lg">
            <CardList title="Recent Transaction" />
          </div>
        </div>
        {/* Left Side */}
        <div className="w-full lg:w-2/3 space-y-6">
          <div className="bg-primary-foreground p-4 rounded-lg">User Card</div>
          <div className="bg-primary-foreground p-4 rounded-lg">Chart</div>
        </div>
      </div>
    </div>
  );
};

export default page;
