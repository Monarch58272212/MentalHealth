import { fonts } from './chakra_ui/fonts';
import { Providers } from './chakra_ui/providers';
import Navigation from './components/Navigation';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={fonts.poppins.variable}>
      <body>
        <Providers>
          <Navigation />
          {children}
        </Providers>
      </body>
    </html>
  );
}
