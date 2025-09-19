import dynamic from "next/dynamic";

const DynamicLogin = dynamic(() => import("../organisms/Login"), {
  ssr: true,
});
export default function Home() {
  return <DynamicLogin />;
}
