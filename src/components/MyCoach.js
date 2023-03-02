export default function MyCoach({
  titleCoach = 'titulo do treinador',
  descCoach = 'descrição do treinador',
  imgCoach = 'imagen do treinador',
  children = 'components do treinador',
}) {
  return (
    <section className="px-10 py-2 border-y-2 border-red-600  text-white flex justify-center items-center ">
      <div className="w-full">
        <h2 className="text-3xl  font-bold  ">{titleCoach}</h2>
        <p className="my-3">{descCoach}</p>

        <section className="flex  items-center gap-10">{children}</section>
      </div>

      <img className="w-full" src={imgCoach} alt="imagen do treinador" />
    </section>
  );
}
