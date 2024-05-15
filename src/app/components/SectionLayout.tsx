export default function SectionLayout({className="", children}: {className?: string, children: React.ReactNode}) {
    return (
        <div className={`${className} w-full h-full inline-block z-0 bg-light p-32`}>
            {children}
        </div>
    )
}