import type React from "react"

interface AccountLayoutProps {
  children: React.ReactNode
  title: string
  description: string
}

export function AccountLayout({ children, title, description }: AccountLayoutProps) {
  return (
    <div className="container py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
        <p className="text-muted-foreground">{description}</p>
      </div>
      <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
        <div className="flex-1">{children}</div>
      </div>
    </div>
  )
}
