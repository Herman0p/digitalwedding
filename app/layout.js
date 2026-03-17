
export const metadata = {
  title: 'Digital Wedding Invitation',
  description: 'An online wedding invitation',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
