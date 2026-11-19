import {AiOutlineDelete} from 'react-icons/ai'
import './index.css'

const TrackItem = props => {
  const {trackDetails, onDeleteTrack} = props
  const {id, imageUrl, name, genre, duration} = trackDetails

  const onClickDelete = () => {
    onDeleteTrack(id)
  }

  return (
    <li className="track-item">
      <div className="track-info-container">
        <img src={imageUrl} alt="track" className="track-thumbnail" />
        <div className="track-text-details">
          <p className="track-name">{name}</p>
          <p className="track-genre">{genre}</p>
        </div>
      </div>

      <div className="track-actions-container">
        <p className="track-duration">{duration}</p>
        <button
          type="button"
          className="delete-button"
          data-testid="delete"
          onClick={onClickDelete}
        >
          <AiOutlineDelete className="delete-icon" />
        </button>
      </div>
    </li>
  )
}

export default TrackItem
