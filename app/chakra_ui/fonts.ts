// app/fonts.ts
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'], // characters na gagamitin
  variable: '--font-poppins', // CSS variable name
  weight: ['400', '500', '600', '700'], // optional, mga weights na gagamitin
});

export const fonts = {
  poppins,
};
