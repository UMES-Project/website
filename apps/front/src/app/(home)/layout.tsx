import NavBar from "@/components/navbar";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <>
        <NavBar />
        <div className="z-0">
            {children}
        </div>
    </>
}
