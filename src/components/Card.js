    export default function Card({imgCard="imagen do card", descriptionCard="descrição do card", buttonCard="titulo do botão",moreInfoButton="titulo do botão de mais informaçães"}){
    return(
        <div className="w-72 mx-3 mt-16 h-auto border-2 border-red-700 inline-block">

            <div className="w-full h-80">
               <p>{descriptionCard}</p>
               <button>{buttonCard}</button>
            </div>
            <button>{moreInfoButton}</button>
        </div>
    )
}