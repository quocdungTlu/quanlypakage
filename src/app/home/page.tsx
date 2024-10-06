import Home from "@/components/pages/home";
import { redirect } from "next/navigation";

export default async function HomePage() {
  const res = await fetch(
    "https://66b1aa301ca8ad33d4f4b907.mockapi.io/category"
  );
  const data = await res.json();
  if (data?.length < 0) {
    redirect("lien-he-de-fix");
  }
  return (
    <div>
      <Home message="" />
    </div>
  );
}
