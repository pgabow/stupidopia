import Link from "next/link";

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {

	const subType = type === 'Создать' ? 'Создавайте' : 'Редактируйте'

  return (
    <section className='w-full max-w-full flex-start flex-col'>
      <h1 className='head_text text-left'>
        <span className='blue_gradient'>{type} Псто</span>
      </h1>
      <p className='desc text-left max-w-md'>
        {subType} и делитесь креативными мыслями со всем миром, дайте волю своему воображению
      </p>

      <form
        onSubmit={handleSubmit}
        className='mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism'
      >
        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>Твоя AI мысль</span>

          <textarea
            value={post.prompt}
            onChange={(e) => setPost({ ...post, prompt: e.target.value })}
            placeholder='Писать мысли здесь'
            required
            className='form_textarea '
          />
        </label>

        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Тег для мысли{' '}
            <span className='font-normal'>(#туктук, #кнампостучались, #третьимбудешь и тд)</span>
          </span>
          <input
            value={post.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            type='text'
            placeholder='#Tag'
            required
            className='form_input'
          />
        </label>

        <div className='flex-end mx-3 mb-5 gap-4'>
          <Link href='/' className='text-gray-500 text-sm'>
            Расходимся
          </Link>

          <button
            type='submit'
            disabled={submitting}
            className='px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white'
          >
            {/* {type} */}
            {submitting ? `${type}...` : type}
          </button>
        </div>
      </form>
    </section>
  )
};

export default Form;
