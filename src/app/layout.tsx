import StyledComponentsRoot from '@/theme/settings/StyledComponentsRoot';

import { Oswald } from '@next/font/google';

const oswald = Oswald({ subsets: ['latin'] });

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={oswald.className}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <StyledComponentsRoot>{children}</StyledComponentsRoot>
      </body>
    </html>
  );
}
