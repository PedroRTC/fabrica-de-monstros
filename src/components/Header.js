export default function Header({
  imgLogo = 'imagen da logo',
  titleHeader = 'titulo do cabeçalho',
  descriptionHeader = 'descriçao do cabeçalho',
  children,
  imgHeader = 'imagen do cabeçalho',
}) {
  return (
    <header className="flex items-end justify-center [height:630px;] bg-black  text-white ">
      <section className="flex items-center justify-end h-full w-2/5 ">
        <div className="flex-col w-3/4">
          <div className="container-logo py-3">
            <img className="w-52 h-16" src={imgLogo} alt="imagen da logo" />
          </div>

          <h1 className="text-3xl py-3 font-extrabold">{titleHeader}</h1>
          <p className="py-3">{descriptionHeader}</p>

          <div>{children}</div>
        </div>
      </section>

      <section className="flex items-center  w-3/4 h-full">
        <img
          className="h-full w-full"
          src={imgHeader}
          alt="imagen do cabeçalho"
        />
      </section>
    </header>
  );
}
