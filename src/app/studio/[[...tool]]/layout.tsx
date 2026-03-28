export const metadata = {
  title: "The Vita Pura — Studio",
  description: "Content management for The Vita Pura",
};

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div id="sanity-studio" style={{ height: "100vh" }}>
      {children}
    </div>
  );
}
