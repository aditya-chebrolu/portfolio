import { Metadata } from "next/types";

export async function generateMetadata(): Promise<Metadata> {
  return {
    robots: {
      index: false, // Prevent indexing
      follow: true // Allow following links
    }
  };
}

const DumpPageLayout = ({
  children
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <>{children}</>;
};

export default DumpPageLayout;
