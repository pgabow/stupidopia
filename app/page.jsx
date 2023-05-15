import Feed from "@components/Feed";

const Home = () => (
  <section className='w-full flex-center flex-col'>
    <h1 className='head_text text-center'>
      Тупи & Делись
      <br className='max-md:hidden' />
      <span className='orange_gradient text-center'> AI-powered Мыслями</span>
    </h1>
    <p className='desc text-center'>
      Тупильник - это почти AI-powered инструмент, позволяющий тупить и делиться своей
      креативностью. Ну и чем не AI? :)
    </p>

    <Feed />
  </section>
)

export default Home;
