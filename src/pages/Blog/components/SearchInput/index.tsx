import { SearchInputContainer } from './styles'

export function SearchInput() {
  return (
    <SearchInputContainer>
      <header>
        <h3>Publicações</h3>
        <span> publicações</span>
      </header>

      <input type="text" placeholder="Buscar conteúdo" />
    </SearchInputContainer>
  )
}
