import type { AppProps } from "next/app";
import { UserProvider } from "@auth0/nextjs-auth0/client";

import "@/styles/globals.css";
import RootLayout from "@/pages/layout";

function MyApp({ Component, pageProps }: AppProps) {
  console.log("MyApp: Component: ");
  return (
    <UserProvider>
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </UserProvider>
  );
}
export default MyApp;
