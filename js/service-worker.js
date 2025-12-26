const CACHE_NAME = "truyen-cache-v2.1.1";
const CACHE_DURATION = 300 * 1000;

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache;
    }),
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        }),
      );
    }),
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") {
    return;
  }

  const url = new URL(event.request.url);
  if (
    url.origin.includes("chrome-extension") ||
    url.hostname.includes("facebook.com") ||
    url.hostname.includes("fb.com") ||
    url.hostname.includes("spreadsheets") ||
    url.hostname.includes("cloudflareinsights.com") ||
    url.pathname.startsWith("/api") ||
    url.pathname.startsWith("/wp-ajax") ||
    url.pathname.startsWith("/wp-admin") ||
    url.pathname.startsWith("/wp-login.php")
  ) {
    return;
  }

  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  try {
    const cache = await caches.open(CACHE_NAME);
    const cachedResponse = await cache.match(request);

    if (cachedResponse) {
      const cacheTimestamp = cachedResponse.headers.get("x-cache-timestamp");
      const currentTime = Date.now();

      if (cacheTimestamp && currentTime - parseInt(cacheTimestamp) < CACHE_DURATION) {
        return cachedResponse;
      } else {
        await cache.delete(request);
      }
    }

    const networkResponse = await fetch(request);

    if (networkResponse.ok) {
      const responseToCache = networkResponse.clone();

      const headers = new Headers(responseToCache.headers);
      headers.set("x-cache-timestamp", Date.now().toString());

      const cachedResponse = new Response(await responseToCache.blob(), {
        status: responseToCache.status,
        statusText: responseToCache.statusText,
        headers: headers,
      });

      await cache.put(request, cachedResponse.clone());

      return cachedResponse;
    }

    return networkResponse;
  } catch (error) {
    const cache = await caches.open(CACHE_NAME);
    const cachedResponse = await cache.match(request);

    if (cachedResponse) {
      return cachedResponse;
    }

    return new Response(
      `
    <!DOCTYPE html>
    <html lang="vi">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Lỗi kết nối</title>
      <style>
        body {
          margin: 0;
          width: 100vw;
          height: 100vh;
          background: linear-gradient(135deg, #000000, #1a1a1a);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          color: #fff;
        }

        .container {
          max-width: 720px;
          width: 100%;
          padding: 32px 20px;
          text-align: center;
          animation: fadeIn 0.6s ease-in-out;
        }

        h1 {
          font-size: 24px;
          font-weight: 600;
          line-height: 1.5;
          margin-bottom: 24px;
          text-shadow: 0 2px 6px rgba(0,0,0,0.5);
        }

        ul {
          margin: 0 auto 24px;
          padding: 0 20px;
          max-width: 520px;
          text-align: left;
          line-height: 1.7;
          color: #c8ff4d;
          font-weight: 400;
        }

        li {
          margin-bottom: 14px;
        }

        a {
          color: #ff4d4d;
          text-decoration: underline;
        }

        .note {
          font-size: 14px;
          line-height: 1.6;
          color: #ddd;
          opacity: 0.9;
        }

        .email {
          margin-top: 8px;
          font-weight: 500;
          color: #aedcff;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>Vui lòng kiểm tra kết nối mạng của bạn</h1>

        <ul>
          <li>
            <a href="https://dochay.me" target="_blank">
              Tải ứng dụng
            </a>
            về điện thoại để đọc truyện không quảng cáo
          </li>
          <li>Thử bật hoặc chuyển đổi WiFi / 4G / 5G rồi truy cập lại trang</li>
          <li>Mở tab ẩn danh và truy cập lại website</li>
        </ul>

        <div class="note">
          Nếu vẫn không truy cập được, vui lòng liên hệ quản trị viên để được hỗ trợ:
          <div class="email">📧 hi@dochay.me</div>
        </div>
      </div>
    </body>
    </html>
    `,
      {
        status: 503,
        statusText: "Service Unavailable",
        headers: {
          "Content-Type": "text/html; charset=UTF-8",
        },
      },
    );
  }
}

self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "CLEAR_CACHE") {
    caches
      .delete(CACHE_NAME)
      .then(() => {
        if (event.ports && event.ports[0]) {
          event.ports[0].postMessage({ success: true });
        }

        if (event.source) {
          event.source.postMessage({ success: true });
        }
      })
      .catch((error) => {
        if (event.ports && event.ports[0]) {
          event.ports[0].postMessage({ success: false, error: error.message });
        }
        if (event.source) {
          event.source.postMessage({ success: false, error: error.message });
        }
      });
  }
});

async function clearCache() {
  const deleted = await caches.delete(CACHE_NAME);
  return deleted;
}
