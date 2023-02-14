import Image from "next/image";
import img4 from "../../public/img4.jpeg";
import img5 from "../../public/img5.jpg";
import img6 from "../../public/img6.jpg";
import img7 from "../../public/img7.jpg";
import img8 from "../../public/img8.jpg";
import img9 from "../../public/img9.jpg";
import img10 from "../../public/img10.jpg";

export const DieBandHeute = () => {
  return (
    <div className="componentTemplate flex center col">
      <p className="pad-40">Die Band Heute</p>

      <div className="flex wrap over-y pad-40">
        <Image src={img4} height={400} width={400} alt="img" />
        <Image src={img6} height={400} width={400} alt="img" />
        <Image src={img7} height={400} width={400} alt="img" />
        <Image src={img8} height={400} width={400} alt="img" />
        <Image src={img9} height={400} width={400} alt="img" />
        <Image src={img10} height={400} width={400} alt="img" />
        <Image src={img5} height={400} width={350} alt="img" />
      </div>
    </div>
  );
};
