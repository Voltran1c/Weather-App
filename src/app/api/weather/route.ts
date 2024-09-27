import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const address = searchParams.get("address");
  const latitude = searchParams.get("lat");
  const longitude = searchParams.get("lon");

  let url = "";
  const apiKey = process.env.OPENWEATHER_API_KEY;

  if (address) {
    url = `https://api.openweathermap.org/data/2.5/weather?q=${address}&appid=${apiKey}`;
  } else if (latitude && longitude) {
    url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;
  }

  const res = await fetch(url);
  const data = await res.json();
  return NextResponse.json({ data });
}
