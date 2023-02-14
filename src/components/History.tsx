import Image from "next/image";
import img1 from "../../public/img1.jpeg";
import img2 from "../../public/img2.jpg";
import img3 from "../../public/img3.jpg";
import img15 from "../../public/img15.jpeg";
import img16 from "../../public/img16.jpeg";
import img17 from "../../public/img17.jpeg";
import img18 from "../../public/img18.jpeg";
import img19 from "../../public/img19.jpeg";

export default function History() {
  return (
    <div className="componentTemplate flex center col">
      <p className="pad-40">History</p>

      <div className="flex wrap over-y">
        <p className="pad-40">
          Sunt proident incididunt labore excepteur ut non ex quis incididunt
          officia proident pariatur eu. Et tempor sit adipisicing aute velit
          cupidatat adipisicing officia sit. Est et Lorem excepteur dolore sunt.
          Tempor deserunt tempor nostrud Lorem officia culpa.
        </p>
        <div className="pad-40">
          <Image src={img1} height={400} width={400} alt="img" />
          <Image src={img2} height={400} width={400} alt="img" />
          <Image src={img3} height={400} width={400} alt="img" />
          <Image src={img15} height={400} width={400} alt="img" />
          <Image src={img16} height={400} width={400} alt="img" />
          <Image src={img19} height={400} width={400} alt="img" />
        </div>
      </div>
    </div>
  );
}
