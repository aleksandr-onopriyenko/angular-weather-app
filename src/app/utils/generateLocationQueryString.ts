export function generateLocationQueryString(
  latitude: number,
  longitude: number,
  name: string
): string {
  return `lat=${latitude}&lon=${longitude}&q=${name}`;
}
