import Image from "next/image";
import { Card, CardBody } from "@heroui/react";

export default function Test() {
  return (
    <div className="flex flex-col mt-16 gap-8">
      <h1 className="text-3xl font-bold">Hot deals right now</h1>
      <div className="flex flex-col sm:flex-row gap-8">
        <Card>
          <Image
            src="/Images/hero-banner-1.png"
            alt="Hero image"
            width={280}
            height={280}
            className="w-full object-cover"
          />
          <CardBody className="flex flex-col gap-2 max-w-[280px]">
            <h2 className="text-xl font-semibold">Family Studio Suite</h2>
            <p className="text-lg text-red-800">From RM199/night. </p>
            <p>Enjoy a comfortable stay with your loved ones.</p>
          </CardBody>
        </Card>
        <Card>
          <Image
            src="/Images/hero-banner-1.png"
            alt="Hero image"
            width={280}
            height={280}
            className="w-full object-cover"
          />
          <CardBody className="flex flex-col gap-2 max-w-[280px]">
            <h2 className="text-xl font-semibold">Family Studio Suite</h2>
            <p className="text-lg text-red-800">From RM199/night. </p>
            <p>Enjoy a comfortable stay with your loved ones.</p>
          </CardBody>
        </Card>
        <Card>
          <Image
            src="/Images/hero-banner-1.png"
            alt="Hero image"
            width={280}
            height={280}
            className="w-full object-cover"
          />
          <CardBody className="flex flex-col gap-2 max-w-[280px]">
            <h2 className="text-xl font-semibold">Family Studio Suite</h2>
            <p className="text-lg text-red-800">From RM199/night. </p>
            <p>Enjoy a comfortable stay with your loved ones.</p>
          </CardBody>
        </Card>
        <Card>
          <Image
            src="/Images/hero-banner-1.png"
            alt="Hero image"
            width={280}
            height={280}
            className="w-full object-cover"
          />
          <CardBody className="flex flex-col gap-2 max-w-[280px]">
            <h2 className="text-xl font-semibold">Family Studio Suite</h2>
            <p className="text-lg text-red-800">From RM199/night. </p>
            <p>Enjoy a comfortable stay with your loved ones.</p>
          </CardBody>
        </Card>
      </div>
      tes testkjfdkjf dfkjf kdjf djfkjf
      <br />
      <br />
      fdfdfdfns
      <br />
      <br />
      dffd fdaff
    </div>
  );
}
