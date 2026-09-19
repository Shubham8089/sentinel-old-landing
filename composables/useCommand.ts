export const useCommand = () => {
  const isOpen = useState('command-open', () => false)
  return {
    isOpen,
    open: () => (isOpen.value = true),
    close: () => (isOpen.value = false),
  }
}
