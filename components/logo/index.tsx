import Image from "next/image";
import React from "react";

function Logo({ size }: { size: number }) {
  return (
    <Image src={"./images/netPay.svg"} alt="logo" width={size} height={size} />
  );
}

export default Logo;
