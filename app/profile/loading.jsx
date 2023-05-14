import Image from "next/image";

const Loading = () => {
  return (
    <div className='w-full flex-center'>
      <Image
        src='assets/icons/loader.svg'
        width={50}
        height={50}
        alt='Типа загрузка...'
        className='object-contain'
      />
    </div>
  );
};

export default Loading;
