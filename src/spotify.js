export const authEndpoint = 'https://accounts.spotify.com/authorize';

const redirectUri = 'http://localhost:3000/';

const clientId = '1146eacceb37470cb522ad3be3975ee6';
const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
  ];

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
    "%20"
  )}&response_type=token&show_dialog=true`;