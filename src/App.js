import Card from "./components/Card";
import Header from "./components/Header";
import IndicativeCard from "./components/IndicativeCard";

function App() {
  return (
    <>
      <Header
        imgLogo="img/logo.png"
        titleHeader="Transforme o seu corpo 5x mais rápido"
        descriptionHeader="Faça parte do método mais utilizado por atletas de alto nível. Venha transformar seu corpo e reconquistar a sua autoestima"
        buttonHeader="COMEÇAR AGORA"
        imgHeader="img/img-header.png"
      />

      <section className="bg-neutral-900 text-white text-center  h-80 p-12 border-y-2 border-red-700">
        <h2 className="text-2xl font-bold">FEITO PARA VOCÊ</h2>
        <IndicativeCard
          imgCardIndicative="img/vector.png"
          descriptionCardIndicative="Iniciante na busca do corpo perfeito"
        />
        <IndicativeCard
          imgCardIndicative="img/grafico.png"
          descriptionCardIndicative="Praticante que não conseguem mais evoluir"
        />
        <IndicativeCard
          imgCardIndicative="img/vector (1).png"
          descriptionCardIndicative="Atleta em evolução e em competições fisiculturistas"
        />
      </section>

      <section className=" text-white text-center  h-80 pt-16">
        <h2 className="text-2xl font-bold text-center">
          COMO FUNCIONA O MÉTODO 5X
        </h2>

        <Card />
        <Card />
        <Card />
        <Card />
      </section>
    </>
  );
}

export default App;
