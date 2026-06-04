export function useSearchModal() {
  const showSearch = useState('searchModalOpen', () => false)

  function openSearch() {
    showSearch.value = true
  }

  function closeSearch() {
    showSearch.value = false
  }

  return { showSearch, openSearch, closeSearch }
}
