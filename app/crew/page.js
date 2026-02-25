import Image from "next/image";

function page() {
  return (
    <div className="h-screen w-full relative max-w-screen ">
      <Image
        src="/crew/background-crew-mobile.jpg"
        fill
        alt="crew-background"
      />
    </div>
  );
}

export default page;
