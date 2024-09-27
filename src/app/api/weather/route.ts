import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const address = searchParams.get("address");
  const latitude = searchParams.get("lat");
  const longitude = searchParams.get("lon");

  let url = "";
  if (address) {
    url =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      address +
      "&appid=c63790d04054911040176e1fac1f5f2e";
  } else if (latitude && longitude) {
    url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=c63790d04054911040176e1fac1f5f2e`;
  }

  const res = await fetch(url);
  const data = await res.json();
  return NextResponse.json({ data });
}
