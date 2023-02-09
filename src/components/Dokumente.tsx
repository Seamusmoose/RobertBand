import Image from "next/image";
import img20 from "../../public/img20.jpeg";

export const Dokumente = () => {
  return (
    <div className="componentTemplate flex center col">
      <p>Dokumente</p>
      <Image src={img20} width={250} height={800} alt="image" />
    </div>
  );
};
