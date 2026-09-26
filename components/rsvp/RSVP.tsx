"use client";

import { FormEvent, useState } from "react";
import { Check, Loader2 } from "lucide-react";

type FormData = {
  name: string;
  phone: string;
  attendance: "attending" | "declining" | "";
  meal: string;
  plusOne: string;
  dietary: string;
};

const initialForm: FormData = {
  name: "",
  phone: "",
  attendance: "",
  meal: "",
  plusOne: "",
  dietary: "",
};

export default function RSVP() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<
    Partial<Record<keyof FormData, string>>
  >({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const updateField = (
    field: keyof FormData,
    value: string
  ) => {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));

    setErrors((current) => ({
      ...current,
      [field]: "",
    }));
  };

  const validate = () => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};

    if (!form.name.trim()) {
      newErrors.name = "Please enter your name.";
    }

    if (!form.phone.trim()) {
      newErrors.phone = "Please enter your phone number.";
    } else if (!/^[6-9]\d{9}$/.test(form.phone.replace(/\s/g, ""))) {
      newErrors.phone = "Please enter a valid 10-digit number.";
    }

    if (!form.attendance) {
      newErrors.attendance = "Please select your attendance.";
    }

    if (!form.meal) {
      newErrors.meal = "Please select a meal preference.";
    }

    return newErrors;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);

    /*
     * Supabase will be connected here later.
     *
     * For now we simulate the submission so we can
     * finish and test the UI first.
     */
    await new Promise((resolve) =>
      setTimeout(resolve, 900)
    );

    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section
        id="rsvp"
        className="
          bg-[#FDFBF7]
          px-6
          py-28
          sm:px-8
          sm:py-36
        "
      >
        <div className="mx-auto max-w-md text-center">

          <div
            className="
              mx-auto
              flex
              h-16
              w-16
              items-center
              justify-center
              rounded-full
              bg-[#1C352D]
              text-[#FDFBF7]
            "
          >
            <Check
              size={25}
              strokeWidth={1.5}
            />
          </div>

          <p
            className="
              mt-8
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.45em]
              text-[#B99A45]
            "
          >
            RSVP received
          </p>

          <h2
            className="
              mt-5
              font-display
              text-5xl
              font-light
              leading-[0.95]
              text-[#1C352D]
            "
          >
            We&apos;ll see you
            <br />
            there.
          </h2>

          <p
            className="
              mx-auto
              mt-6
              max-w-xs
              text-sm
              leading-7
              text-[#1C352D]/60
            "
          >
            Thank you for letting us know.
            We&apos;re looking forward to
            celebrating this special day
            with you.
          </p>

          <button
            type="button"
            onClick={() => {
              setSubmitted(false);
              setForm(initialForm);
            }}
            className="
              mt-8
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.3em]
              text-[#1C352D]
              underline
              underline-offset-4
            "
          >
            Submit another response
          </button>

        </div>
      </section>
    );
  }

  return (
    <section
      id="rsvp"
      className="
        bg-[#FDFBF7]
        px-6
        py-28
        sm:px-8
        sm:py-36
      "
    >
      <div className="mx-auto max-w-xl">

        {/* Heading */}
        <div className="text-center">

          <p
            className="
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.45em]
              text-[#B99A45]
            "
          >
            Kindly reply
          </p>

          <h2
            className="
              mt-6
              font-display
              text-[48px]
              font-light
              leading-[0.95]
              tracking-[-0.025em]
              text-[#1C352D]
              sm:text-6xl
            "
          >
            Will you join us?
          </h2>

          <p
            className="
              mx-auto
              mt-6
              max-w-sm
              text-sm
              leading-7
              text-[#1C352D]/60
            "
          >
            Your presence would mean a lot to us.
            Please let us know if you&apos;ll be
            celebrating with us.
          </p>

        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          noValidate
          className="mt-14"
        >

          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.3em]
                text-[#1C352D]/60
              "
            >
              Full name
            </label>

            <input
              id="name"
              type="text"
              value={form.name}
              onChange={(event) =>
                updateField("name", event.target.value)
              }
              placeholder="Your name"
              className="
                mt-3
                w-full
                border-b
                border-[#1C352D]/15
                bg-transparent
                px-0
                py-4
                font-display
                text-xl
                text-[#1C352D]
                outline-none
                placeholder:text-[#1C352D]/30
                focus:border-[#B99A45]
              "
            />

            {errors.name && (
              <p className="mt-2 text-xs text-red-700">
                {errors.name}
              </p>
            )}
          </div>

          {/* Phone */}
          <div className="mt-8">
            <label
              htmlFor="phone"
              className="
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.3em]
                text-[#1C352D]/60
              "
            >
              Phone number
            </label>

            <input
              id="phone"
              type="tel"
              inputMode="numeric"
              maxLength={10}
              value={form.phone}
              onChange={(event) =>
                updateField(
                  "phone",
                  event.target.value.replace(/\D/g, "")
                )
              }
              placeholder="10-digit mobile number"
              className="
                mt-3
                w-full
                border-b
                border-[#1C352D]/15
                bg-transparent
                px-0
                py-4
                font-display
                text-xl
                text-[#1C352D]
                outline-none
                placeholder:text-[#1C352D]/30
                focus:border-[#B99A45]
              "
            />

            {errors.phone && (
              <p className="mt-2 text-xs text-red-700">
                {errors.phone}
              </p>
            )}
          </div>

          {/* Attendance */}
          <div className="mt-10">

            <p
              className="
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.3em]
                text-[#1C352D]/60
              "
            >
              Will you be joining us?
            </p>

            <div className="mt-4 grid grid-cols-2 gap-3">

              <button
                type="button"
                onClick={() =>
                  updateField("attendance", "attending")
                }
                className={`
                  border
                  px-4
                  py-4
                  text-sm
                  transition-all
                  duration-300
                  ${
                    form.attendance === "attending"
                      ? "border-[#1C352D] bg-[#1C352D] text-[#FDFBF7]"
                      : "border-[#1C352D]/15 text-[#1C352D] hover:border-[#1C352D]/40"
                  }
                `}
              >
                Joyfully attending
              </button>

              <button
                type="button"
                onClick={() =>
                  updateField("attendance", "declining")
                }
                className={`
                  border
                  px-4
                  py-4
                  text-sm
                  transition-all
                  duration-300
                  ${
                    form.attendance === "declining"
                      ? "border-[#1C352D] bg-[#1C352D] text-[#FDFBF7]"
                      : "border-[#1C352D]/15 text-[#1C352D] hover:border-[#1C352D]/40"
                  }
                `}
              >
                Regretfully declining
              </button>

            </div>

            {errors.attendance && (
              <p className="mt-2 text-xs text-red-700">
                {errors.attendance}
              </p>
            )}
          </div>

          {/* Meal */}
          <div className="mt-10">
            <label
              htmlFor="meal"
              className="
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.3em]
                text-[#1C352D]/60
              "
            >
              Meal preference
            </label>

            <select
              id="meal"
              value={form.meal}
              onChange={(event) =>
                updateField("meal", event.target.value)
              }
              className="
                mt-3
                w-full
                appearance-none
                border-b
                border-[#1C352D]/15
                bg-transparent
                px-0
                py-4
                font-display
                text-xl
                text-[#1C352D]
                outline-none
                focus:border-[#B99A45]
              "
            >
              <option value="">
                Select your preference
              </option>
              <option value="vegetarian">
                Vegetarian
              </option>
              <option value="non-vegetarian">
                Non-vegetarian
              </option>
              <option value="jain">
                Jain
              </option>
              <option value="other">
                Other
              </option>
            </select>

            {errors.meal && (
              <p className="mt-2 text-xs text-red-700">
                {errors.meal}
              </p>
            )}
          </div>

          {/* Plus one */}
          <div className="mt-10">
            <label
              htmlFor="plusOne"
              className="
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.3em]
                text-[#1C352D]/60
              "
            >
              Plus one
              <span className="ml-2 font-normal tracking-normal">
                Optional
              </span>
            </label>

            <input
              id="plusOne"
              type="text"
              value={form.plusOne}
              onChange={(event) =>
                updateField("plusOne", event.target.value)
              }
              placeholder="Guest name, if applicable"
              className="
                mt-3
                w-full
                border-b
                border-[#1C352D]/15
                bg-transparent
                px-0
                py-4
                font-display
                text-xl
                text-[#1C352D]
                outline-none
                placeholder:text-[#1C352D]/30
                focus:border-[#B99A45]
              "
            />
          </div>

          {/* Dietary */}
          <div className="mt-10">
            <label
              htmlFor="dietary"
              className="
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.3em]
                text-[#1C352D]/60
              "
            >
              Dietary requirements
              <span className="ml-2 font-normal tracking-normal">
                Optional
              </span>
            </label>

            <textarea
              id="dietary"
              rows={3}
              value={form.dietary}
              onChange={(event) =>
                updateField("dietary", event.target.value)
              }
              placeholder="Anything we should know?"
              className="
                mt-3
                w-full
                resize-none
                border-b
                border-[#1C352D]/15
                bg-transparent
                px-0
                py-4
                text-sm
                leading-6
                text-[#1C352D]
                outline-none
                placeholder:text-[#1C352D]/30
                focus:border-[#B99A45]
              "
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="
              mt-12
              flex
              w-full
              items-center
              justify-center
              gap-3
              bg-[#1C352D]
              px-6
              py-5
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.3em]
              text-[#FDFBF7]
              transition
              duration-300
              hover:bg-[#12261F]
              active:scale-[0.99]
              disabled:cursor-not-allowed
              disabled:opacity-70
            "
          >
            {loading ? (
              <>
                <Loader2
                  size={15}
                  className="animate-spin"
                />
                Sending
              </>
            ) : (
              "Send RSVP"
            )}
          </button>

        </form>
      </div>
    </section>
  );
}