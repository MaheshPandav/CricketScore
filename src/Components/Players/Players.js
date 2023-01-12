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
        
      <div className="home-team">
              {props.players.length > 0 &&
                props.players.map((res, index) => {
                  if (res.teamId === props.homeId) {
                    return (
                      <div className="player-details">
                        {res.imageUrl ? (
                          <img src={res.imageUrl} alt="player" />
                        ) : (
                          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlrNp5xmRAAnjGHuHgHWBjdBGwTWF2RFHnQQ&usqp=CAU" alt="player" />
                        )}
                        <p>{res.displayName}</p>
                      </div>
                    );
                  }
                })}
            </div>
            <div className="away-team">
              {props.players.length > 0 &&
                props.players.map((res, index) => {
                  if (res.teamId === props.awayId) {
                    return (
                      <div className="player-details">
                        <p>{res.displayName}</p>{" "}
                        {res.imageUrl ? (
                          <img src={res.imageUrl} alt="player" />
                        ) : (
                          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlrNp5xmRAAnjGHuHgHWBjdBGwTWF2RFHnQQ&usqp=CAU" alt="player" />
                        )}
                      </div>
                    );
                  }
                })}
            </div>
      </div>
    </div> : <p style={{color:'#fff',alignItems:'center',display:'flex',justifyContent:'center'}}>Team will be annouced at the toss time</p>}
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
