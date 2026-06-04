import { modes } from "@/constants";
import ModeDetails from "./components/ModeDetails";

export async function generateStaticParams() {
  return modes.map(({ id }) => ({ modeId: id }));
}

export default async function Page({ params }: { params: Promise<{ modeId: string }> }) {
  const { modeId } = await params;
  const mode = modes.find(({ id }) => id === modeId)!;

  return <ModeDetails mode={mode} />
}
