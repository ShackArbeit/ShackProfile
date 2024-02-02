'use client'
import { ThemeProvider } from "next-themes"

interface ChildrenProp{
    children:React.ReactNode
}

export function Providers({children}:ChildrenProp){
    return(  
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
    </ThemeProvider>
    )
}