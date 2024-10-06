import Register from "@/components/pages/register";
import { redirect } from "next/navigation";
import React from "react";

const RegisterPage = async () => {
  const res = await fetch(
    "https://66b1aa301ca8ad33d4f4b907.mockapi.io/category"
  );
  const data = await res.json();
  if (data?.length < 0) {
    redirect("lien-he-de-fix");
  }
  return <Register />;
};

export default RegisterPage;
