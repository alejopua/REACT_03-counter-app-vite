import PropTypes from 'prop-types';
// const newName = (name) => {
//   return `Hello ${name}`
// }


// eslint-disable-next-line react/prop-types
export const FirstApp = ({ principalTitle, title, subTitle }) => {

  return (
    <>
      <h1 className="text-6xl font-bold text-teal-50" data-testid="test-principalTitle">{ principalTitle }</h1>
      <h2 className="text-6xl font-bold text-teal-50">{ title }</h2>
      <h3 className="text-6xl font-bold text-teal-50">{ title }</h3>
      <h4 className="text-3xl text-teal-50">{ subTitle }</h4>
    </>
  )
}

FirstApp.propTypes = {
  principalTitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired
}

FirstApp.defaultProps = {
  title: 'No title',
  subTitle: 'No sub-title'
}