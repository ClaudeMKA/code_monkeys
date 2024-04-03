import Image from "next/image";
import { Inter } from "next/font/google";
import {Head} from "next/document";
import {Seo} from "@/ui/components/seo";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
      <>
          <Seo title="Coders Claudy" description="Description">
          </Seo>
          <h1>Hello World </h1>
      </>



  );
}
