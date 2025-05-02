import './globals.css';

export const metadata = {
  title: 'Statizer',
  description: 'All Your Artist Stats in One Place',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body>
        <div id="bg">
          <div className="visible top" style={{ backgroundImage: "url('/bg01.jpg')" }}></div>
          <div style={{ backgroundImage: "url('/bg02.jpg')" }}></div>
          <div style={{ backgroundImage: "url('/bg03.jpg')" }}></div>
        </div>
        <div style={{ position: 'relative', zIndex: 2 }}>{children}</div>
      </body>
    </html>
  );
}
