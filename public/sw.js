// Kill-switch service worker for StayCool Airco.
//
// Reden: de oude network-first SW cachete content-gehashte Vite-bundles +
// HTML en zorgde voor intermitterende "hangt op eerste bezoek, refresh lost op"
// problemen (vooral mobiel/na deploy). Zie git-historie: dit is meerdere keren
// geprobeerd te fixen en zelfs al eens volledig verwijderd (7e5cb87).
//
// Deze SW doet bewust NIETS behalve zichzelf opruimen: hij wist alle caches,
// unregistert zichzelf en herlaadt elke open tab één keer. Browsers checken bij
// navigatie automatisch op een SW-update, dus elke bestaande installatie in een
// bezoekersbrowser vernietigt zo zichzelf op het volgende bezoek.
//
// index.html registreert GEEN service worker meer, dus nieuwe bezoekers krijgen
// er nooit een. Zodra de meeste bezoekers deze kill-switch hebben uitgevoerd
// (enkele weken), mag dit bestand verwijderd worden.

self.addEventListener('install', () => {
  // Direct activeren, niet wachten op een vrije client.
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      // 1. Wis alle caches die de oude SW heeft aangemaakt.
      const cacheNames = await caches.keys();
      await Promise.all(cacheNames.map((name) => caches.delete(name)));

      // 2. Unregister deze service worker.
      await self.registration.unregister();

      // 3. Herlaad elke open tab één keer zodat ze zonder SW + zonder
      //    stale cache verder gaan.
      const clients = await self.clients.matchAll({ type: 'window' });
      for (const client of clients) {
        client.navigate(client.url);
      }
    })()
  );
});

// Geen fetch-handler: alle requests gaan rechtstreeks naar het netwerk.
