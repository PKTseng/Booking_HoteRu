'use client'

import { ThemeProvider } from './theme-provider'

function provider({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
        {children}
      </ThemeProvider>
    </>
  )
}

export default provider
