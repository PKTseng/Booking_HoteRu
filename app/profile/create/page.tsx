import FromInput from '@/components/form/formInput'
import SubmitButton from '@/components/form/button'

const createProfileAction = async (formData: FormData) => {
  'use server'

  const firstName = formData.get('firstName') as string

  console.log(firstName)
}

function CreateProfilePage() {
  return (
    <section>
      <h1 className='mb-8 text-2xl font-semibold capitalize'>Create User</h1>
      <div className='max-w-lg rounded-md border p-8'>
        <form action={createProfileAction}>
          <FromInput name={'firstName'} type={'text'} />

          <SubmitButton text='Create Profile' />
        </form>
      </div>
    </section>
  )
}

export default CreateProfilePage
