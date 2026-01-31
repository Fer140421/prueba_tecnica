import Navbar from "@/components/Navbar";

export default function MenuLayout({ children }) {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
    </div>
  );
}