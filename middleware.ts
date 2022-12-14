import { NextRequest, NextResponse } from "next/server";

// Limit the middleware to paths starting with `/api/`
export const config = {
  matcher: ["/manifest.json"],
};

export function middleware(request: NextRequest) {
  const url = new URL(request.headers.get("referer") ?? "");
  const theme = url.searchParams.get("theme") ?? "meshle";
  return new NextResponse(
    JSON.stringify(
      theme === "meshle"
        ? {
            name: "Meshle",
            short_name: "Meshle",
            id: "meshle",
            icons: [
              {
                src: "/icons/icon.png",
                sizes: "192x192",
                type: "image/png",
              },

              {
                src: "/icons/icon-512x512.png",
                sizes: "512x512",
                type: "image/png",
              },
            ],
            theme_color: "#1c1332",
            background_color: "#1c1332",
            start_url: "/?theme=meshle",
            display: "standalone",
            orientation: "portrait",
          }
        : {
            name: "Kopp",
            short_name: "Kopp",
            id: "kopp",
            icons: [
              {
                src: "/icons/kopp-icon.png",
                sizes: "192x192",
                type: "image/png",
              },

              {
                src: "/icons/kopp-icon-512x512.png",
                sizes: "512x512",
                type: "image/png",
              },
            ],
            theme_color: "#214159",
            background_color: "#214159",
            start_url: "/?theme=kopp",
            display: "standalone",
            orientation: "portrait",
          }
    ),
    { status: 200, headers: { "content-type": "application/json" } }
  );
}
