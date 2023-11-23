import { useDispatch } from 'react-redux'
import * as S from './styles'

import { adicionar } from '../../store/reducers/carrinho'
import { useGetProdutosQuery } from '../../services/api'

export const paraReal = (valor: number) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
    valor
  )

const ProdutoComponent = () => {
  const { data: produto, isLoading } = useGetProdutosQuery()
  const dispatch = useDispatch()

  if (isLoading) return <h2>Carregando...</h2>

  return (
    <S.Produto>
      <S.Capa>
        <img src={produto?.imagem} alt={produto?.nome} />
      </S.Capa>
      <S.Titulo>{produto?.nome}</S.Titulo>
      <S.Prices>
        <strong>{paraReal(produto?.preco)}</strong>
      </S.Prices>
      <S.BtnComprar onClick={() => favoritar(produto)} type="button">
        {estaNosFavoritos
          ? '- Remover dos favoritos'
          : '+ Adicionar aos favoritos'}
      </S.BtnComprar>
      <S.BtnComprar onClick={() => dispatch(adicionar(produto?))} type="button">
        Adicionar ao carrinho
      </S.BtnComprar>
    </S.Produto>
  )
}

export default ProdutoComponent
