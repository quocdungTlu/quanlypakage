import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";

const noto = Noto_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider, Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import Header from "@/components/layouts/header";
import Footer from "@/components/layouts/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={noto.className}>
        <ConfigProvider
          theme={{
            token: {
              fontFamily: "Noto Sans, sans-serif",
              colorPrimary: "#673de6",
            },
          }}
        >
          <Layout>
            <Header />
            <Content
              className="lg:px-36 sm:px-1 "
              style={{
                minHeight: "calc(100vh - 120px)",
                backgroundColor: "#fff",
              }}
            >
              <AntdRegistry>{children}</AntdRegistry>
            </Content>
            <Footer />
          </Layout>
        </ConfigProvider>
      </body>
    </html>
  );
}
