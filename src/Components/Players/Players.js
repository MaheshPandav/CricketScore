import React from 'react'
import '../Players/Player.scss'

const Players = (props) => {
    console.log(props)
  return (
    <>
    {props.players.length > 0 ?
    <div className='Player-section'>
        <div className='team-name'>
        <div className='team-a'>
      <p>{props.homeTeamName}</p>
      </div>
      <div className='team-b'>
      <p>{props.awayTeamName}</p>
      </div>
      </div>
      <div className='team-Player'>
        
        <div className='team-a-player'>
      <p>{props.homeTeamName}</p>
      <p>{props.homeTeamName}</p>
      </div>
      <div className='team-b-player'>
      <p>{props.awayTeamName}</p>
      <p>{props.homeTeamName}</p>
      </div>
      </div>
    </div> : 'okay'}
    </>
  )
}

export default Players

// {props.players.length > 0 &&
//     props.players.map((res, index) => {
//       if (res.teamId === props.homeId) {
//         return (
//           <div>
//             {res.imageUrl ? (
//               <img src={res.imageUrl} alt="player" className='image' />
//             ) : ''}
//             <p>{res.displayName}</p>
//           </div>
//         );
//       }
//     })}
