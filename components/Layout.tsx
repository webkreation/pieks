import Footer from "./Footer";

const Layout = ({ children }) => (
  <>
    <main className="flex flex-col items-center justify-center flex-1 px-20">
      {children}
    </main>
    <Footer />
  </>
);

export default Layout;
