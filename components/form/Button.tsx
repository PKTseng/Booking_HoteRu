'use client'
import { ReloadIcon } from '@radix-ui/react-icons'
import { useFormStatus } from 'react-dom'
import { Button } from '@/components/ui/button'

type SubmitButtonProps = {
  className?: string
  text?: string
}

function SubmitButton({ text = '', className = '' }: SubmitButtonProps) {
  const { pending } = useFormStatus()
  return (
    <Button type='submit' size='lg' disabled={pending} className={`${className} capitalize`}>
      {pending ? (
        <>
          <ReloadIcon className='mr-2 h-4 w-4 animate-spin' />
          Please wait ...
        </>
      ) : (
        text
      )}
    </Button>
  )
}

export default SubmitButton
