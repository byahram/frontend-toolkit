export function convertGoogleDriveUrl(url: string): string | null {
  const match = url.match(/drive\.google\.com\/file\/d\/([^/]+)\/view/);

  if (match && match[1]) {
    return `https://drive.google.com/uc?export=view&id=${match[1]}`;
  }

  return null;
}
