import { INoticiasNormalizadas } from "./Noticias"
import { BotonLectura, DescripcionTarjetaNoticia, FechaTarjetaNoticia, ImagenTarjetaNoticia, TarjetaNoticia, TituloTarjetaNoticia } from "./styled"

interface Props {
  data: INoticiasNormalizadas
  onClick: () => void
}

/**
 * @param {Object} data info de la noticia
 * @param {Function} onClick función onClick del botón "Ver más" 
 * @returns {JSX.Element} componente Noticia
 */

const Noticia = ({data, onClick}: Props) => {
  return (
    <TarjetaNoticia>
      <ImagenTarjetaNoticia src={data.imagen} />
      <TituloTarjetaNoticia>{data.titulo}</TituloTarjetaNoticia>
      <FechaTarjetaNoticia>{data.fecha}</FechaTarjetaNoticia>
      <DescripcionTarjetaNoticia>
        {data.descripcionCorta}
      </DescripcionTarjetaNoticia>
      <BotonLectura onClick={onClick}>Ver más</BotonLectura>
    </TarjetaNoticia>
  )
}

export default Noticia