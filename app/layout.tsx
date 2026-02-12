import AppSidebar from "@/components/ui/AppSidebar";
import Navbar from "@/components/ui/NavBar/Navbar";
import { ThemeProvider } from "@/components/ui/provider/ThemeProvider";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SidebarProvider>
            <div className="flex min-h-screen w-full">
              <AppSidebar />
              <main className="flex flex-1 flex-col">
                <Navbar />
                <div className="p-4">{children}</div>
              </main>
            </div>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
