import Button from './components/Button';
import Card from './components/Card';
import CommentCard from './components/CommentCard';
import Header from './components/Header';
import IndicativeCard from './components/IndicativeCard';
import MyCoach from './components/MyCoach';
import TrainerData from './components/TrainerData';

function App() {
  return (
    <>
      <Header
        imgLogo="img/logo.png"
        titleHeader="Transforme o seu corpo 5x mais rápido"
        descriptionHeader="Faça parte do método mais utilizado por atletas de alto nível. Venha transformar seu corpo e reconquistar a sua autoestima"
        imgHeader="img/img-header.png"
      >
        <Button descButton="COMEÇAR AGORA" />
      </Header>

      <section className="bg-neutral-900 text-white text-center  h-80 p-12 border-y-2 border-red-700">
        <h2 className="text-3xl font-bold">FEITO PARA VOCÊ</h2>
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
        <h2 className="text-3xl font-bold text-center">
          COMO FUNCIONA O <spa className="text-red-600">MÉTODO 5X</spa>
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
        <br />

        <div className="mt-10">
          <Button descButton=" QUERO COMEÇAR AGORA" />
        </div>
      </section>

      <section className=" text-center  h-auto py-16 text-white ">
        <h2 className="text-3xl font-bold text-center">
          O QUE ESTÃO FALANDO DO NOSSO
          <br /> MÉTODO DE TREINAMENTO
        </h2>

        <div className="flex justify-center items-center w-9/12 m-auto gap-3">
          <i
            className=" text-red-700 cursor-pointer  fa fa-angle-left fa-2x"
            aria-hidden="true"
          ></i>

          <section className="flex items-center justify-center w-full h-96 gap-5 overflow-hidden">
            <CommentCard
              imgPerfilComment="img/img-perfil01.png"
              profUserComment="FISICULTURISTA"
              nameUserComment="LEONARDO"
              commentUser="Lorem ipsum dolor sit amet consectetur. Vel ut nam mi velit. Lorem ornare accumsan faucibus cras. Porta varius bibendum."
              imgComment="img/img-comment.png"
            />
            <CommentCard
              imgPerfilComment="img/img-perfil02.png"
              profUserComment="ATLETA"
              nameUserComment="GEOVANA"
              commentUser="Lorem ipsum dolor sit amet consectetur. Vel ut nam mi velit. Lorem ornare accumsan faucibus cras. Porta varius bibendum."
              imgComment="img/img-comment.png"
            />
            <CommentCard
              imgPerfilComment="img/img-perfil03.png"
              profUserComment="JORNALISTA"
              nameUserComment="JOÃO"
              commentUser="Lorem ipsum dolor sit amet consectetur. Vel ut nam mi velit. Lorem ornare accumsan faucibus cras. Porta varius bibendum."
              imgComment="img/img-comment.png"
            />
          </section>

          <i
            className="text-red-700 cursor-pointer fa fa-angle-right fa-2x"
            aria-hidden="true"
          ></i>
        </div>
      </section>

      <MyCoach
        titleCoach="QUEM É SEU TREINADOR"
        descCoach="Lorem ipsum dolor sit amet consectetur. In augue egestas ullamcorper nec viverra orci risus egestas. Lacus consequat auctor lacus amet volutpat sed. Pharetra suscipit in vitae ante etiam in. Convallis blandit dolor in nisl malesuada venenatis dignissim mauris.
        Nisl mi vehicula cursus nisi sit nulla donec adipiscing. Ipsum nibh aliquam integer faucibus purus. Orci eu malesuada morbi et interdum nunc lorem a adipiscing. Nisl suscipit maecenas risus amet at convallis massa.Lorem ipsum dolor sit amet consectetur. In augue egestas ullamcorper nec viverra orci risus egestas. Lacus consequat auctor lacus amet volutpat sed.
        Pharetra suscipit in vitae ante etiam in. Convallis blandit dolor in nisl malesuada venenatis dignissim mauris."
        imgCoach="img/Hero.png"
      >
        <TrainerData
          numbers="+200"
          specification="VIDAS"
          descTrainerData="TRANSFORMADAS"
        />
        <TrainerData
          numbers="+14"
          specification="ATLETAS"
          descTrainerData="PROFISSIONAIS"
        />
        <TrainerData
          numbers="+8"
          specification="FILIAIS"
          descTrainerData="CONSTRUIDAS"
        />
      </MyCoach>
    </>
  );
}

export default App;
