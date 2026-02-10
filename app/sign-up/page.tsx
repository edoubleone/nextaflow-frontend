"use client";

import { useMutation } from "@tanstack/react-query";
import { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import logo from "@/public/assets/Nextaflow-allwhite.png";
import Button from "../components/button";
import Link from "next/link";
import Image from "next/image";
import Label from "../components/label";
import Input from "../components/input";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useSearchParams } from "next/navigation";
import { ghlClient } from "@/lib/ghl";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  telephone: string;
  referral: string;
}

export default function Signup() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    telephone: "",
    referral: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    const referral = searchParams.get("referral");
    if (referral) {
      setFormData((prev) => ({ ...prev, referral }));
    }
  }, [searchParams]);

  const referralFromUrl = searchParams.get("referral");
  const homeLink = referralFromUrl ? `/?referral=${referralFromUrl}` : "/";

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "email" ? value.toLowerCase() : value,
    }));
    // Remove error on change
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const signupMutation = useMutation({
    mutationFn: async (data: FormData) => {
      const ghlPayload: any = {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email.toLowerCase(),
        phone: data.telephone,
        locationId: process.env.NEXT_PUBLIC_GHL_LOCATION_ID,
        tags: data.referral?.trim()
          ? ["signup", `ref-${data.referral}`]
          : ["signup"],
      };
      const res = await ghlClient.post("/contacts/", ghlPayload);
      return res.data;
    },
    onSuccess: () => {
      toast.success("Signup successful");
      router.push("/successful");
    },
    onError: (error: any) => {
      toast.error(
        error?.response?.data?.message || "Failed to send data to GHL",
      );
    },
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const newErrors: { [key: string]: string } = {};
    if (!formData.firstName) newErrors.firstName = "First name is required";
    if (!formData.lastName) newErrors.lastName = "Last name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.telephone) newErrors.telephone = "Phone number is required";

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    signupMutation.mutate(formData);
  };

  return (
    <section className="bg-black pb-16 px-4 md:px-6">
      <div className="md:p-6 px-4 pt-6">
        <Link href={homeLink} className="flex items-center">
          <Image
            src={logo}
            alt="Nextaflow logo"
            className="md:h-8 h-5 w-auto"
            width={200}
            height={200}
            priority
          />
        </Link>
      </div>

      <div className="max-w-lg mx-auto bg-white mt-10 rounded-3xl overflow-hidden">
        <div className="md:px-8 px-4 py-10">
          <h2 className="md:text-3xl text-xl font-[600] text-gray-900 mb-2 text-center">
            Start Your 30-Days Free Trial
          </h2>

          <p className="text-center md:text-[16px] text-[13px] text-[#1a1a1a] font-[300] mb-8">
            We'll set up your NextaFlow account for you no coding required.
          </p>

          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* Names */}
            <div className="flex items-center gap-4">
              <div>
                <Label text="First name" />
                <Input
                  placeholder="First name"
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                />
                {errors.firstName && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.firstName}
                  </p>
                )}
              </div>

              <div>
                <Label text="Last name" />
                <Input
                  placeholder="Last name"
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                />
                {errors.lastName && (
                  <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>
                )}
              </div>
            </div>

            {/* Email */}
            <div>
              <Label text="Email" />
              <Input
                placeholder="Email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            {/* Referral */}
            <div>
              <Label text="Referral Code" />
              <Input
                placeholder="Referral code"
                type="text"
                name="referral"
                value={formData.referral}
                onChange={handleChange}
              />
            </div>

            {/* Phone Number */}
            <div>
              <Label text="Phone Number" />
              <PhoneInput
                country="us"
                value={formData.telephone}
                onChange={(phone) =>
                  setFormData((prev) => ({ ...prev, telephone: phone }))
                }
                containerStyle={{
                  height: "40px",
                  borderRadius: "5px",
                  color: "#1a1a1a",
                  width: "100%",
                  marginTop: "5px",
                }}
                inputStyle={{
                  height: "40px",
                  width: "100%",
                  borderRadius: "5px",
                  borderColor: "#e5e7eb",
                  color: "#1a1a1a",
                }}
                onFocus={(e: any) => (e.target.style.borderColor = "#000000")}
                onBlur={(e: any) => (e.target.style.borderColor = "#000000")}
              />
              {errors.telephone && (
                <p className="text-red-500 text-xs mt-1">{errors.telephone}</p>
              )}
            </div>

            <Button
              type="submit"
              text="Start My Free Trial + Free Setup"
              className="bg-[var(--secondary)] text-black w-full mt-10"
              isLoading={signupMutation.isPending}
              disabled={signupMutation.isPending}
            />

            <p className="text-center text-[#1a1a1a] font-[300] text-sm my-2">
              Join business owners who 5X their business by trading app fatigue
              for growth.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
