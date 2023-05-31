const apiToken: string =
  'BQD28Jq6at_Y6BbPqMPG1DYuPWG5aRBy7BRvAMscgH7eAkwAF8xk6M62YRPJqfujnWiZ4eb5U2ATRDST-Gi92Hv56yi3kPusxkGhVToXoQgZSBoPpWHSNkNFVJqAW_MSBsjsnoKChC7MTRXVfcBCPiKBdmxs6AEGRx2yOH15c4LS06KsaSgMt5560GWN6Tjjs_g';

export const fetchTracks = async () => {
  const response = await fetch('https://api.spotify.com/v1/me/tracks', {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + apiToken,
    },
  });
  if (!response.ok) {
    throw new Error(`Fetching tracks failed with status ${response.status}`);
  }
  const data = (await response.json()) as { items: unknown[] };

  return data.items;
};
