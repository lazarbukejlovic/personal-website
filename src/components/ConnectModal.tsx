import { useState, useMemo } from "react";
import { format, addDays, isWeekend } from "date-fns";
import { Calendar as CalendarIcon, Clock, CheckCircle2, ArrowLeft } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { supabase } from "@/integrations/supabase/client";

const TIME_SLOTS = [
  "09:00", "09:30", "10:00", "10:30",
  "11:00", "11:30", "13:00", "13:30",
  "14:00", "14:30", "15:00", "15:30",
  "16:00", "16:30",
];

const TIMEZONES = [
  "Europe/Belgrade",
  "Europe/London",
  "America/New_York",
  "America/Chicago",
  "America/Los_Angeles",
  "Asia/Tokyo",
];

type Step = "schedule" | "details" | "confirmed";

interface ConnectModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function ConnectModal({ open, onOpenChange }: ConnectModalProps) {
  const [step, setStep] = useState<Step>("schedule");
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState<string>();
  const [timezone, setTimezone] = useState("Europe/Belgrade");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const disabledDays = useMemo(
    () => ({
      before: addDays(new Date(), 1),
      after: addDays(new Date(), 60),
    }),
    []
  );

  const reset = () => {
    setStep("schedule");
    setSelectedDate(undefined);
    setSelectedTime(undefined);
    setName("");
    setEmail("");
    setMessage("");
  };

  const handleClose = (value: boolean) => {
    if (!value) reset();
    onOpenChange(value);
  };

  const canProceedToDetails = selectedDate && selectedTime;

  const handleSubmit = async () => {
    if (!selectedDate || !selectedTime || !name.trim() || !email.trim()) return;
    setSubmitting(true);

    try {
      const { error } = await supabase.from("scheduling_requests").insert({
        name: name.trim(),
        email: email.trim(),
        message: message.trim(),
        scheduled_date: format(selectedDate, "yyyy-MM-dd"),
        scheduled_time: selectedTime,
        timezone,
      });

      if (error) throw error;

      // Send confirmation email (best-effort — don't block UX on failure)
      try {
        await supabase.functions.invoke("send-booking-confirmation", {
          body: {
            name: name.trim(),
            email: email.trim(),
            scheduled_date: format(selectedDate, "EEEE, MMMM d, yyyy"),
            scheduled_time: selectedTime,
            timezone: timezone.replace("_", " "),
          },
        });
      } catch (emailErr) {
        console.warn("Booking confirmation email could not be sent:", emailErr);
      }

      setStep("confirmed");
    } catch (err) {
      console.error("Failed to submit scheduling request:", err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="font-heading text-xl font-semibold">
            {step === "confirmed" ? "Confirmed" : "Intro Call"}
          </DialogTitle>
          {step !== "confirmed" && (
            <p className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
              <Clock size={14} /> 30 min
            </p>
          )}
        </DialogHeader>

        {/* Step: Schedule */}
        {step === "schedule" && (
          <div className="space-y-6">
            {/* Timezone */}
            <div>
              <label className="mb-1.5 block text-xs font-medium text-muted-foreground">
                Timezone
              </label>
              <select
                value={timezone}
                onChange={(e) => setTimezone(e.target.value)}
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground"
              >
                {TIMEZONES.map((tz) => (
                  <option key={tz} value={tz}>
                    {tz.replace("_", " ")}
                  </option>
                ))}
              </select>
            </div>

            {/* Date */}
            <div>
              <label className="mb-1.5 block text-xs font-medium text-muted-foreground">
                Select a date
              </label>
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                disabled={[disabledDays, isWeekend]}
                className="pointer-events-auto rounded-md border border-border"
              />
            </div>

            {/* Time slots */}
            {selectedDate && (
              <div>
                <label className="mb-1.5 block text-xs font-medium text-muted-foreground">
                  Available times — {format(selectedDate, "EEEE, MMM d")}
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {TIME_SLOTS.map((slot) => (
                    <button
                      key={slot}
                      onClick={() => setSelectedTime(slot)}
                      className={cn(
                        "rounded-md border px-3 py-2 text-sm transition-colors",
                        selectedTime === slot
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-border text-foreground hover:bg-secondary"
                      )}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <button
              disabled={!canProceedToDetails}
              onClick={() => setStep("details")}
              className="w-full rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Continue
            </button>
          </div>
        )}

        {/* Step: Details */}
        {step === "details" && (
          <div className="space-y-5">
            <button
              onClick={() => setStep("schedule")}
              className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft size={14} /> Back
            </button>

            <div className="rounded-md border border-border bg-secondary p-3 text-sm text-secondary-foreground">
              <CalendarIcon size={14} className="mb-1 inline-block text-primary" />{" "}
              {selectedDate && format(selectedDate, "EEEE, MMMM d, yyyy")} at{" "}
              {selectedTime} ({timezone.replace("_", " ")})
            </div>

            <div>
              <label className="mb-1 block text-xs font-medium text-muted-foreground">
                Name *
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground"
                placeholder="Your name"
                maxLength={100}
              />
            </div>

            <div>
              <label className="mb-1 block text-xs font-medium text-muted-foreground">
                Email *
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground"
                placeholder="you@example.com"
                maxLength={255}
              />
            </div>

            <div>
              <label className="mb-1 block text-xs font-medium text-muted-foreground">
                Message
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={3}
                className="w-full resize-none rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground"
                placeholder="Brief context for the call (optional)"
                maxLength={500}
              />
            </div>

            <button
              disabled={!name.trim() || !email.trim() || submitting}
              onClick={handleSubmit}
              className="w-full rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
            >
              {submitting ? "Scheduling…" : "Confirm Booking"}
            </button>
          </div>
        )}

        {/* Step: Confirmed */}
        {step === "confirmed" && (
          <div className="flex flex-col items-center py-8 text-center">
            <CheckCircle2 size={48} className="text-primary" />
            <h3 className="mt-4 font-heading text-lg font-semibold text-foreground">
              You're booked
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              A scheduling request has been submitted for{" "}
              {selectedDate && format(selectedDate, "MMMM d, yyyy")} at{" "}
              {selectedTime}. You'll receive a confirmation soon.
            </p>
            <button
              onClick={() => handleClose(false)}
              className="mt-6 rounded-md border border-border px-6 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              Close
            </button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
