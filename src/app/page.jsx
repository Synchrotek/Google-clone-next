import Image from "next/image";
import HomeHeader from "./components/HomeHeader";
import HomeSearch from "./components/HomeSearch";

export default function Home() {
  return (<>
    {/* Header */}
    <HomeHeader />

    {/* body */}
    <div className="flex flex-col items-center mt-24">
      <Image
        width="300"
        height="100"
        src="/GoogleLogo.png"
      />
      <HomeSearch />
    </div>
  </>
  )
}
