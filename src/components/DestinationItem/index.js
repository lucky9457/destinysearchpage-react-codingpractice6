// Write your code here
import './index.css'

const DestinationItem = props => {
  const {userDetails} = props
  const {id, name, imgUrl} = userDetails
  return (
    <li className="mainItemContainer">
      <img className="img1" src={imgUrl} alt={name} />
      <p className="head">{name}</p>
    </li>
  )
}
export default DestinationItem
