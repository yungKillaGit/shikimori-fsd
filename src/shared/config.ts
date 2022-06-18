const SHIKIMORI_CLIENT_ID = import.meta.env.VITE_SHIKIMORI_CLIENT_ID;
const SHIKIMORI_CLIENT_SECRET = import.meta.env.VITE_SHIKIMORI_CLIENT_SECRET;
const SHIKIMORI_AUTH_PAGE = import.meta.env.VITE_SHIKIMORI_AUTH_PAGE;

export const SHIKIMORI_CONFIG = {
  clientId: SHIKIMORI_CLIENT_ID,
  clientSecret: SHIKIMORI_CLIENT_SECRET,
  authPageUrl: SHIKIMORI_AUTH_PAGE,
  availableScopes: ['user_rates', 'comments', 'topics'],
};

export const APPLICATION_NAME = 'Shikimori FSD';
