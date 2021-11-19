//import kdramas from "../listskdramas"
import kdramas from "../listskdramas/listskdramas"

const Doramas = () => {
return (
    <>
    {kdramas.map(kdramas =>
    <div key={kdramas.id}>
    <h2>{kdramas.nome}</h2>
    <p>{kdramas.descrição}</p>
    <img src ={kdramas.imagem} alt={kdramas.nome}/>
    </div>
)}
    </>
)
}

export default Doramas 