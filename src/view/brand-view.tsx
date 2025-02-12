import { BrandGrid } from "@/components/brand-grid";
import hero from "../../public/logos/Hero_MotoCorp.png";
import honda from "../../public/logos/Honda_Logo.png";
import bajaj from "../../public/logos/Bajaj-Auto-Logo.png";
import tvs from "../../public/logos/TVS_Motor_Company_Logo.png";
import royalEnfield from "../../public/logos/royal-enfield-logo.png";
import yamaha from "../../public/logos/yamaha.png";
import ktm from "../../public/logos/KTM-Logo.png";
import ather from "../../public/logos/AtherLogo.png";
import ola from "../../public/logos/Ola-Electric 1.png";
import revolt from "../../public/logos/revolt.png";
import ultraviolette from "../../public/logos/Ultraviolette_Logo.png";
import tork from "../../public/logos/tork.png";

export default function BrandView() {
  return (
    <BrandGrid
      title="Lorem Ipsum Dolor Sit Amet"
      subtitle="Consectetur. Commodo Leo Amet."
      logos={[
        { src: hero, alt: "Hero" },
        { src: honda, alt: "Honda" },
        { src: bajaj, alt: "Bajaj" },
        { src: tvs, alt: "TVS" },
        { src: royalEnfield, alt: "Royal Enfield" },
        { src: yamaha, alt: "Yamaha" },
        { src: ktm, alt: "KTM" },
        { src: ather, alt: "Ather" },
        { src: ola, alt: "Ola Electric" },
        { src: revolt, alt: "Revolt" },
        { src: ultraviolette, alt: "Ultraviolette" },
        { src: tork, alt: "Tork Motors" },
      ]}
    />
  );
}
