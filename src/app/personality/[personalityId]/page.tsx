import { personalities } from "@/constants";
import PersonalityDetails from "./components/PersonalityDetails";

export async function generateStaticParams() {
  return personalities.map(p => ({ personalityId: p.id }));
}

export default async function Page({ params }: { params: Promise<{ personalityId: string }> }) {
  const { personalityId } = await params;
  const personality = personalities.find(({ id }) => id === personalityId)!;

  return <PersonalityDetails personality={personality} />
}
