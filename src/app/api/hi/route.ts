import { NextResponse } from "next/server";

/* eslint @typescript-eslint/require-await: 0 */
export async function GET(_request: Request) {
    return NextResponse.json("Hello")
}