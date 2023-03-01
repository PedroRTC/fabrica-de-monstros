export default function CommentCard({
  imgPerfilComment = 'imagen do perfil',
  nameUserComment = 'nome do usuário',
  profUserComment = 'profisão do usuário',
  commentUser = 'coméntario',
  imgComment = 'imagen do card coméntario',
}) {
  return (
    <div className=" w-72 h-72 bg-zinc-900 text-white pt-5 text-left rounded-md border-b-2 border-red-700">
      <section className="flex items-center gap-6 [width:85%] m-auto">
        <img className="w-14 h-14" src={imgPerfilComment} />

        <div>
          <h3 className="font-bold">{nameUserComment}</h3>
          <p className="text-red-700 text-xs">{profUserComment}</p>
        </div>
      </section>
      <p className="mt-8 gap-2 text-base [width:85%] m-auto ">{commentUser}</p>
      <section className="flex justify-end items-center">
        <img className="w-11 h-14" src={imgComment} />
      </section>
    </div>
  );
}
