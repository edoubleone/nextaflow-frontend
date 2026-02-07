"use client";

import { useMutation } from "@tanstack/react-query";
import { useState, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import axios from "axios";
import logo from "@/public/assets/Nextaflow-allwhite.png";
import Button from "../components/button";
import Link from "next/link";
import Image from "next/image";
import Label from "../components/label";
import Input from "../components/input";
import InputPassword from "../components/inputPassword";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  telephone: string;
  password: string;
}

export default function Signup() {
  const router = useRouter();
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    telephone: "",
    password: "",
  });

  const [passwordError, setPasswordError] = useState("");

  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;

  // Generic input handler
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: name === "email" ? value.toLowerCase() : value,
    }));
  };

  // Password-specific validation
  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setFormData((prev) => ({
      ...prev,
      password: value,
    }));

    if (!passwordRegex.test(value)) {
      setPasswordError(
        "Password must be at least 8 characters and include uppercase, lowercase, number, and special character.",
      );
    } else {
      setPasswordError("");
    }
  };
  const signupMutation = useMutation({
    mutationFn: async (data: FormData) => {
      const payload = {
        firstname: data.firstName,
        lastname: data.lastName,
        email: data.email.toLowerCase(),
        telephone: data.telephone,
        password: data.password,
      };

      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/register`,
        payload,
        {
          headers: { "Content-Type": "application/json" },
        },
      );
      console.log("API response:", res);
      return res.data;
    },

    onSuccess: (data) => {
      toast.success(data.message);
      router.push("/successful");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        telephone: "",
        password: "",
      });
    },
    onError: (error: any) => {
      const errorsObj = error?.response?.data?.errors as
        | Record<string, string[]>
        | undefined;

      if (errorsObj) {
        const errorsArray = Object.values(errorsObj).flat();

        errorsArray.forEach((msg) => {
          toast.error(msg);
        });
      } else {
        toast.error(
          error?.response?.data?.errors || error?.message || "Signup failed",
        );
      }
    },
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (passwordError) return;

    signupMutation.mutate(formData);
  };

  return (
    <section className="bg-black pb-16 px-4 md:px-6">
      {/* Logo */}
      <Link href="/" className="flex items-center pt-10">
        <Image
          src={logo}
          alt="Nextaflow logo"
          className="md:h-8 h-5 w-auto"
          width={200}
          height={200}
        />
      </Link>

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
                  required
                />
              </div>

              <div>
                <Label text="Last name" />
                <Input
                  placeholder="Last name"
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
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
                required
              />
            </div>

            {/* Phone Number */}
            <div>
              <Label text="Phone Number" />
              <Input
                placeholder="Phone number"
                type="tel"
                name="telephone"
                value={formData.telephone}
                onChange={handleChange}
                required
              />
            </div>

            {/* Password */}
            <div>
              <Label text="Password" />
              <InputPassword
                placeholder="Password"
                name="password"
                id="password"
                value={formData.password}
                onChange={handlePasswordChange}
                showVisibility={passwordVisible}
                togglePasswordVisibility={() =>
                  setPasswordVisible(!passwordVisible)
                }
              />
              {passwordError && (
                <p className="text-red-500 text-xs mt-1">{passwordError}</p>
              )}
            </div>

            {/* Submit */}
            <Button
              type="submit"
              text="Start My Free Trial + Free Setup"
              className="bg-[var(--secondary)] text-black w-full mt-10"
              isLoading={signupMutation.isPending}
              disabled={!!passwordError}
            />

            {/* Social Proof */}
            <p className="text-center text-[#1a1a1a] font-[300] text-sm my-2">
              Join business owners who 5X their business by trading app fatigue
              for growth.
            </p>

            {signupMutation.isError && (
              <p className="text-red-500 text-sm text-center">
                {(signupMutation.error as Error).message}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
