"use client";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Checkbox } from "@/components/ui/checkbox";
import { Card } from "./ui/card";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Calendars } from "lucide-react";
import { format } from "date-fns";
const ToDoList = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const [open, setOpen] = useState(false);
  return (
    <div>
      <h1 className="text-lg font-medium mb-4 ms-2">To Do List</h1>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button className="w-full bg-white p-4 mb-4">
            <Calendars />
            {date ? format(date, "PPP") : <span>Select a Date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-0 w-auto">
          <Calendar
            mode="single"
            selected={date}
            onSelect={(date) => (setDate(date), setOpen(false))}
          />
        </PopoverContent>
      </Popover>

      <ScrollArea className="max-h-[400] overflow-y-auto mt-4">
        <div className="flex flex-col gap-2">
          <Card className="p-4">
            <div className="flex items-center gap-2">
              <Checkbox id="box" />
              <label htmlFor="box" className={`text-sm`}>
                Lorem, ipsum dolor adipisicing elit.
              </label>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-2">
              <Checkbox id="box" />
              <label htmlFor="box" className={`text-sm`}>
                Lorem, ipsum dolor adipisicing elit.
              </label>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-2">
              <Checkbox id="box" />
              <label htmlFor="box" className={`text-sm`}>
                Lorem, ipsum dolor adipisicing elit.
              </label>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-2">
              <Checkbox id="box" />
              <label htmlFor="box" className={`text-sm`}>
                Lorem, ipsum dolor adipisicing elit.
              </label>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-2">
              <Checkbox id="box" />
              <label htmlFor="box" className={`text-sm`}>
                Lorem, ipsum dolor adipisicing elit.
              </label>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-2">
              <Checkbox id="box" />
              <label htmlFor="box" className={`text-sm`}>
                Lorem, ipsum dolor adipisicing elit.
              </label>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-2">
              <Checkbox id="box" />
              <label htmlFor="box" className={`text-sm`}>
                Lorem, ipsum dolor adipisicing elit.
              </label>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-2">
              <Checkbox id="box" />
              <label htmlFor="box" className={`text-sm`}>
                Lorem, ipsum dolor adipisicing elit.
              </label>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-2">
              <Checkbox id="box" />
              <label htmlFor="box" className={`text-sm`}>
                Lorem, ipsum dolor adipisicing elit.
              </label>
            </div>
          </Card>
        </div>
      </ScrollArea>
    </div>
  );
};
export default ToDoList;
