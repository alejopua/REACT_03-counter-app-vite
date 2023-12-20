
const newName = (name) => {
  return `Hello ${name}`
}

export const FirstApp = () => {
  return (
    <>
      <h1>{newName('Alejandro')}</h1>
      <h3>My first React App :)</h3>
    </>
  )
}
