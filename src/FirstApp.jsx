
// const newName = (name) => {
//   return `Hello ${name}`
// }


// eslint-disable-next-line react/prop-types
export const FirstApp = ({ title, subTitle }) => {

  return (
    <>
      <h1 className="text-6xl font-bold text-teal-50">{ title }</h1>
      <h3 className="text-3xl text-teal-50">{ subTitle }</h3>
    </>
  )
}
