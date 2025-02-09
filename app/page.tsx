import Header from "@/components/Header";
import MemoCalendar from "@/components/MemoCalendar";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col max-w-screen-md mx-auto">
      <Header />
      <MemoCalendar />
    </main>
  );
}
