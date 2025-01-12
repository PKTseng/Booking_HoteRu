'use client'

import { SignOutButton } from '@clerk/nextjs'
import { useToast } from '@/hooks/use-toast'

function SignOutLink() {
  const { toast } = useToast()

  const handleLogout = () => {
    toast({ description: 'You have been signed out.' })
  }

  return (
    <SignOutButton redirectUrl='/'>
      <button className='w-full p-2 text-left' onClick={handleLogout}>
        Logout
      </button>
    </SignOutButton>
  )
}

export default SignOutLink
