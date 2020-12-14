import 'regenerator-runtime';
import { precacheAndRoute } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { StaleWhileRevalidate, CacheFirst } from 'workbox-strategies';
import CONFIG from './globals/config';

precacheAndRoute(self.__WB_MANIFEST);

registerRoute(
  new RegExp(CONFIG.BASE_URL),
  new StaleWhileRevalidate({
    cacheName: CONFIG.CACHE_NAME,
  }),
);

registerRoute(
  ({ url }) => url.origin === 'https://fonts.gstatic.com' || url.origin === 'https://fonts.googleapis.com',
  new CacheFirst({
    cacheName: 'google-fonts-webfonts',
  }),
);
