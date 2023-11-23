import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Produto } from '../../App'

type carrinhoState = {
  itens: Produto[]
}

const initialState: carrinhoState = {
  itens: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<Produto>) => {
      const product = action.payload;

      if (state.itens.find((produto) => produto.id === product.id)) {
        alert('O item já foi adicionado')
      } else {
        state.itens.push(product)
      }
    }
  }
})

export const { adicionar } = carrinhoSlice.actions
export default carrinhoSlice.reducer
