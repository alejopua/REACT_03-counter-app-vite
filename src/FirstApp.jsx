
const newName = (name) => {
  return `Hello ${name}`
}

export const FirstApp = () => {
  return (
    <>
      <h1 className="text-3xl font-bold underline">{newName('Alejandro')}</h1>
      <h3 className="bg-orange-400">My first React App :)</h3>
    </>
  )
}
