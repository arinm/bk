import { CartProvider } from "./context/CartContext";
import Navbar from "./components/Navbar";
import CartSidebar from "./components/CartSidebar";
import "./styles/globals.scss";
import { ToastContainer } from "react-toastify";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CartProvider>
      <html lang="en">
        <body>
          <Navbar />
          <div className="container">
            <CartSidebar />
            <ToastContainer
              position="bottom-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick={false}
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
            />
          {children}
          </div>
        </body>
      </html>
    </CartProvider>
  );
}
