import Home from "@/components/pages/home";
import { redirect } from "next/navigation";

export default function HomePage() {
  redirect("/home");
  return <div></div>;
}
