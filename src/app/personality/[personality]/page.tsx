import { personalities } from "@/contants";

export async function generateStaticParams() {
  return personalities.map(p=>({personality: p.id}));
}
 
export default async function Page({ params }:{params: Promise<{personality:string}>}) {
  const { personality } = await params;
  
  return (
    <div>
      <h1>{personality}</h1>
    </div>
  )
}
