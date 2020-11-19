type Props = {
  title: string
}

export default function Home({ title = "teste" }: Props) {
  return (
    <div>{title}!</div>
  )
}
