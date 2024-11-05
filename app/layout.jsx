import '@/public/styles/globals.scss'

export const metadata = {
  title: "ProBet",
  description: "Los mejores tips deportivos",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
