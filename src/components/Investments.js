export default function Investments({
  titleInvestmens = 'titulo do invertimento',
  descInvestments = 'descrição do invertimento',
  valueInvestments = 'valor do invertimento',
  installments = 'parcela do invertimento',
  imgSecurity = 'imagen de segurança',
  descSecurity = 'descrição de segurança',
  children,
}) {
  return (
    <section className=" px-20 flex justify-center gap-20 items-center text-white [height:620px] text-center">
      <div className="flex  flex-col gap-6 [width:450px;] [height:auto;] p-9 bg-zinc-900  rounded-md border-red-600 border-2">
        <h2 className="text-3xl m-auto w-60 font-bold border-b-2 border-red-600">
          {titleInvestmens}
        </h2>
        <p className="text-base">{descInvestments}</p>
        <p>{valueInvestments}</p>
        <h3 className="text-2xl">{installments}</h3>
        <div>{children}</div>
      </div>
      <div className="[width:350px;] [height:450px;] px-3 py-10 text-center">
        <img
          className="m-auto mb-5"
          src={imgSecurity}
          alt="imagen de segurança"
        />
        <p>{descSecurity}</p>
      </div>
    </section>
  );
}
