/* ============================================================
   KZUKI MOTOS Y CARROS — Servidor estático (sin dependencias)
   Levanta el sitio en cualquier hosting Node (Render, etc.).
   Puerto: usa $PORT (Render) o 3000 por defecto.
   ============================================================ */
"use strict";

const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = process.env.PORT || 3000;
const ROOT = __dirname;

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".txt": "text/plain; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
  ".pdf": "application/pdf",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".ttf": "font/ttf",
  ".otf": "font/otf"
};

const CACHEABLE = [".png", ".jpg", ".jpeg", ".webp", ".gif", ".svg", ".ico", ".woff", ".woff2", ".ttf", ".otf", ".css", ".js"];

function safePath(urlPath) {
  let p;
  try {
    p = decodeURIComponent(urlPath);
  } catch (e) {
    p = urlPath;
  }
  return p;
}

const server = http.createServer((req, res) => {
  const urlPath = safePath((req.url || "/").split("?")[0]);
  let filePath = path.normalize(path.join(ROOT, urlPath === "/" ? "index.html" : urlPath));

  if (!filePath.startsWith(ROOT)) {
    res.writeHead(403, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Forbidden");
    return;
  }

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      if (!path.extname(urlPath)) {
        res.writeHead(200, { "Content-Type": MIME[".html"], "Cache-Control": "no-cache" });
        fs.createReadStream(path.join(ROOT, "index.html")).pipe(res);
        return;
      }
      res.writeHead(404, {
        "Content-Type": "text/html; charset=utf-8",
        "X-Content-Type-Options": "nosniff"
      });
      fs.createReadStream(path.join(ROOT, "404.html")).pipe(res);
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    res.writeHead(200, {
      "Content-Type": MIME[ext] || "application/octet-stream",
      "Cache-Control": CACHEABLE.includes(ext) ? "public, max-age=604800" : "no-cache",
      "X-Content-Type-Options": "nosniff"
    });
    fs.createReadStream(filePath).pipe(res);
  });
});

server.listen(PORT, () => {
  console.log("KZUKI Motos y Carros disponible en http://localhost:" + PORT);
});