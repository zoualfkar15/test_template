/** Files in /public. Empty in local dev, /test_template when built for GitHub Pages. */
const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function publicFile(path: string) {
  const file = path.startsWith("/") ? path : `/${path}`;
  return `${base}${file}`;
}
