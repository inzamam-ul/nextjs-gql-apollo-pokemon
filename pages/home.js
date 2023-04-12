import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
const home = () => {
  const { push } = useRouter();

  useEffect(() => {
    push("/");
  }, []);
  return <div></div>;
};

export default home;
