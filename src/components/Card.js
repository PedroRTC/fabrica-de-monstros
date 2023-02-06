export default function Card({
  imgCard = "imagen do card",
  descriptionCard = "descrição do card",
  buttonCard = "titulo do botão",
  moreInfoButton = "titulo de mais informaçães",
}) {
  return (
    <div className="[width:310px;] mx-2 mt-16 h-auto  inline-block bg-zinc-900 ">
      <div
        style={{
          background: `url(${imgCard})`,
          height: "400px",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "end",
          alignItems: "center",
          backgroundSize: "cover",
        }}
      >
        <p className="font-extrabold text-lg w-60 ">{descriptionCard}</p>
        <button className="h-7 w-44 bg-red-700 rounded-3xl mt-3 mb-5 font-bold text-base">
          {buttonCard}
        </button>
      </div>
      <button className="bg-red-700 w-full h-9 font-bold text-left pl-4 text-base">
        <i class="fa fa-caret-right" aria-hidden="true"></i> {moreInfoButton}
      </button>
    </div>
  );
}
