export default function TrainerData({
  numbers = 'numero de pessoas',
  specification = 'subtítulo',
  descTrainerData = 'descrição do ',
}) {
  return (
    <div className="text-center text-xs ">
      <h3 className="text-red-600 font-bold text-2xl">{numbers}</h3>
      <p>{specification}</p>
      <p>{descTrainerData}</p>
    </div>
  );
}
