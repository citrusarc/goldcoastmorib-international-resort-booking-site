"use client";

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useParams } from "next/navigation";

import { rooms } from "@/data/rooms";

export default function TestPage() {
  const params = useParams();
  const slug =
    typeof params?.slug === "string"
      ? params.slug
      : Array.isArray(params?.slug)
        ? params.slug[0]
        : "";
  const room = rooms.find((item) => item.slug === slug);

  if (!room) return notFound();
  return <div>Test</div>;
}
