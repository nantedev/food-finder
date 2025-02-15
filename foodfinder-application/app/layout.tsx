import "@/app/globals.css";
import StyledComponentsRegistry from './registry'
import { Header } from "./components/header/Header";
import { StyledLayout } from "./components/layout/StyledLayout";

interface PropsInterface {
  children: React.ReactNode;
}

export default function RootLayout({ children }: PropsInterface) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <StyledComponentsRegistry>
          <Header />
          <StyledLayout>
            {children}
          </StyledLayout>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}


