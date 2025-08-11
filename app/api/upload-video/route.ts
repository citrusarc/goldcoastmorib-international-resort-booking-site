// app/api/upload-video/route.ts
import { NextRequest, NextResponse } from "next/server";
import { put } from "@vercel/blob";

export const POST = async (request: NextRequest) => {
  try {
    const url = new URL(request.url);
    let filename = url.searchParams.get("filename") || "uploaded-file";
    filename = filename.replace(/[^a-zA-Z0-9.\-_]/g, "_");

    const bodyBuffer = await request.arrayBuffer();

    if (bodyBuffer.byteLength === 0) {
      return NextResponse.json(
        { error: "No file data in request body" },
        { status: 400 }
      );
    }

    const blob = await put(filename, bodyBuffer, {
      access: "public",
      addRandomSuffix: true,
    });

    return NextResponse.json({ url: blob.url });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "Upload failed" },
      { status: 500 }
    );
  }
};
