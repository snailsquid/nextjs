import React from "react";
import Background from "../../components/Background";
import { useRouter } from "next/router";

export default function Maps() {
  const router = useRouter();
  const { id } = router.query;

  return <Background color="blue">Hello {id}</Background>;
}
