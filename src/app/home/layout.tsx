import Footer from "@/components/layouts/footer";
import Header from "@/components/layouts/header";
import MainSider from "@/components/layouts/user-sider";
import Loading from "@/components/loading";
import { Layout, Spin } from "antd";
import { Content } from "antd/es/layout/layout";
import { Suspense } from "react";

interface HomeLayoutProps {
  children: React.ReactNode;
}

export default function HomeLayout({ children }: HomeLayoutProps) {
  //   const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ height: "100vh" }}>
      <MainSider />
      <Layout>
        <Header />
        <Content
          className="lg:px-20 sm:px-1 "
          style={{
            minHeight: "calc(100vh - 120px)",
            backgroundColor: "#fff",
          }}
        >
          <Suspense fallback={<Loading />}> {children}</Suspense>
        </Content>
        <Footer />
      </Layout>
    </Layout>
  );
}
