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

      <section className="  text-center  h-auto py-16 text-white">
        <h2 className="text-2xl font-bold text-center">
          COMO FUNCIONA O MÉTODO 5X
        </h2>

        <Card
          imgCard="img/img-card01.png"
          descriptionCard="TRANSFORMANDO A ALIMENTAÇÃO"
          buttonCard="MÓDULO 01"
          moreInfoButton="SAIBA MAIS"
        />
        <Card
          imgCard="img/img-card02.png"
          descriptionCard="CRONOGRAMA DOS TREINOS"
          buttonCard="MÓDULO 02"
          moreInfoButton="SAIBA MAIS"
        />
        <Card
          imgCard="img/img-card03.png"
          descriptionCard="A IMPORTÁNCIA DO DESCANSO"
          buttonCard="MÓDULO 03"
          moreInfoButton="SAIBA MAIS"
        />
        <Card
          imgCard="img/img-card04.png"
          descriptionCard="ALCANÇANDO OS OBJETIVOS"
          buttonCard="MÓDULO 04"
          moreInfoButton="SAIBA MAIS"
        />
      </section>
    </>
  );
}

export default App;
