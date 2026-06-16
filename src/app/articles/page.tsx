import { Suspense } from "react";
import Articles from "./components/Articles";

export default function ArticlesContainer() {
  return <Suspense>
    <Articles />
  </Suspense>
}
