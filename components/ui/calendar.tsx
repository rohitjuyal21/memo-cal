"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  selectedDate,
  ...props
}: CalendarProps & { selectedDate?: Date }) {
  console.log(selectedDate);
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-4", className)}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-8",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-lg font-semibold",
        nav: "space-x-1 flex items-center",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "h-10 w-10 bg-transparent p-0 hover:opacity-100"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex space-x-1 sm:space-x-2",
        head_cell:
          "text-muted-foreground rounded-md w-10 sm:w-16 sm:text-base text-sm font-normal ",
        row: "flex w-full mt-1 sm:mt-2 gap-x-1 sm:gap-x-2",
        cell: cn(
          "relative p-0 text-center text-sm sm:h-16 sm:w-16 w-10 h-10 focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected].day-range-end)]:rounded-r-md",
          props.mode === "range"
            ? "[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md"
            : "[&:has([aria-selected])]:rounded-md"
        ),
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "sm:h-16 sm:w-16 w-10 h-10 p-0 font-normal aria-selected:opacity-100 sm:text-base cursor-pointer bg-accent/50 relative  after:absolute after:inset-0 after:rounded-md after:bg-accent/40 after:backdrop-blur-[1px]  after:scale-0 after:transition-all after:duration-700 after:ease-in-out group after:z-40 after:rounded-full"
        ),
        day_range_start: "day-range-start",
        day_range_end: "day-range-end",
        day_selected: "after:scale-[20] group-[aria-selected]:after:scale-[20]",
        day_outside:
          "day-outside text-muted-foreground aria-selected:bg-accent/50 aria-selected:text-muted-foreground bg-accent/30 hover:text-muted-foreground focus:bg-accent/50 focus:text-muted-foreground",
        day_disabled: "text-muted-foreground opacity-50",
        day_range_middle:
          "aria-selected:bg-accent aria-selected:text-accent-foreground",
        day_hidden: "invisible",
        ...classNames,
      }}
      formatters={{
        formatWeekdayName: (weekday) =>
          weekday.toLocaleDateString("en-US", { weekday: "short" }),
      }}
      components={{
        IconLeft: ({ className, ...props }) => (
          <ChevronLeft className={cn("h-5 w-5", className)} {...props} />
        ),
        IconRight: ({ className, ...props }) => (
          <ChevronRight className={cn("h-5 w-5", className)} {...props} />
        ),
      }}
      {...props}
    />
  );
}
Calendar.displayName = "Calendar";

export { Calendar };
