import { Content, Footer, Header } from "antd/es/layout/layout";

interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: AuthLayoutProps) {
  return (
    <div>
      <Content
        className="lg:px-20 sm:px-1 "
        style={{
          minHeight: "100vh",
          backgroundColor: "#D9D9D9",
        }}
      >
        {children}
      </Content>
    </div>
  );
}
