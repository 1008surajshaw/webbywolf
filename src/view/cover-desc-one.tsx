import { CoverLayout } from "@/layouts/cover-layout";
import digitalArtwork from "../../public/page4/digital_artwork_one.png"; 

export default function DigitalArtwork() {
  return (
    <>
      <CoverLayout
        title="Lorem Ipsum Dolor Sit Amet Consectetur."
        subtitle="Quis Adipiscing Purus Egestas Aliquam Viverra Mi."
        description="Lorem ipsum dolor sit amet consectetur. Felis netus eras congue quis elit sociis."
        imageSrc={digitalArtwork}
      />
    </>
  );
}
