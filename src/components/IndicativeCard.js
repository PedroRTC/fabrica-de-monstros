export default function IndicativeCard({
  imgCardIndicative = "imagen do card de indicação",
  descriptionCardIndicative = "descrição do card de indicação",
}) {
  return (
    <div className="w-56 h-56  text-white inline-block text-center mt-14 mx-14 ">
      <img className="w-16 h-16 m-auto" src={imgCardIndicative} />
      <p>{descriptionCardIndicative}</p>
    </div>
  );
}
