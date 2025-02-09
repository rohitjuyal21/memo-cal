"use client";
import React, { useState } from "react";
import { Calendar } from "./ui/calendar";
import { Button } from "./ui/button";
import { ChevronLeft } from "lucide-react";

import { motion, AnimatePresence } from "motion/react";

export default function MemoCalendar() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);

  return (
    <div className="flex-1 flex items-center justify-center">
      <div className="p-8 border rounded-lg overflow-hidden relative">
        <Calendar
          showOutsideDays={false}
          selected={selectedDate}
          onDayClick={(date) => setSelectedDate(date)}
          selectedDate={selectedDate}
        />
        <AnimatePresence>
          {selectedDate && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20, transition: { delay: 0 } }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute z-50  p-6 inset-0"
            >
              <Button
                onClick={() => setSelectedDate(undefined)}
                className="rounded-full group"
              >
                <ChevronLeft className="group-hover:-translate-x-1 transition duration-300" />
                Back
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
