import { PostContainer } from './styles'

export function Post() {
  return (
    <PostContainer to="/post/1">
      <div>
        <strong>npm: pacotes, pacotes e pacotes</strong>
        <span>Há 1 dia</span>
      </div>
      <p>
        npm é uma sigla para Node Package Manager, cuja tradução direta é bem
        simples: Gerenciador de Pacotes Node.
      </p>
    </PostContainer>
  )
}
