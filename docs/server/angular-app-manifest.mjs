
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/ingsync-frontend/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/ingsync-frontend/menu"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BOWF7JSJ.js"
    ],
    "route": "/ingsync-frontend/restaurant-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-RJYE7R44.js",
      "chunk-MOLKGQFN.js"
    ],
    "route": "/ingsync-frontend/restaurant-menu"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-K2KZORP4.js",
      "chunk-MOLKGQFN.js"
    ],
    "route": "/ingsync-frontend/ingredients-view"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 53870, hash: '5d1d0b4016eb23a6287b3eeb9ba2dc47c1d65d4e0c38e2f361405a8ae368ae0f', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1785, hash: '8c8f66ec5b2b02217bdb86fe380da197f6189524fc8e2fb6369fda96dc2ae2ab', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'menu/index.html': {size: 83801, hash: '2e9b21349e987febe2762f800e36204b7aabaef92ef58fd0d829697c16ad5571', text: () => import('./assets-chunks/menu_index_html.mjs').then(m => m.default)},
    'ingredients-view/index.html': {size: 59366, hash: 'b7e4729ae1ef06da1d60a51b57073fc3a8237363728c99a0471bc22714174237', text: () => import('./assets-chunks/ingredients-view_index_html.mjs').then(m => m.default)},
    'restaurant-list/index.html': {size: 84700, hash: '251e954e249c20594dde61c1844049e1086313a063ae35af7790cd2a0cb73e4c', text: () => import('./assets-chunks/restaurant-list_index_html.mjs').then(m => m.default)},
    'restaurant-menu/index.html': {size: 75508, hash: 'f5f327af2c6a193ad0cd6f24a9ff7e7441de5d38eaba37e47abdd2bcd9fa33a0', text: () => import('./assets-chunks/restaurant-menu_index_html.mjs').then(m => m.default)},
    'styles-7XSIUR3H.css': {size: 53402, hash: 'MwPgbQH2gCc', text: () => import('./assets-chunks/styles-7XSIUR3H_css.mjs').then(m => m.default)}
  },
};
