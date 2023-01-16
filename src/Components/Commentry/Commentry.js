import React from 'react'
import '../Commentry/Commentry.scss'

const Commentry = (props) => {
    console.log(props)
    
  return (
    <div>
        {props.Commentry.map((item,index)=>{
            return <div className='commentry'>
                {/* <p style={{color:'#fff'}}>==============================================================</p>
                <p style={{color:'#ffff'}}>ober number : {item.overNumber}</p>
                <p style={{color:'#ffff'}}>wickets : {item.wickets}</p>
                <p style={{color:'#ffff'}}>runs : {item.totalRuns}</p> */}
                {item.balls.map((balls,index)=>{
                    return (
                        <>
                        {balls.comments[0].commentTypeId === "EndOfOver" && (
                    <div className='message-over'>
                      <p style={{color:'#fff'}}> OverView : {balls.comments[0].message}</p>
                      {/* <p style={{color:'#fff'}}>
                        {item.overNumber - 1}.{balls.ballNumber}
                      </p> */}
                    </div>
                  )}
                  <div className='single-overs'>
                      {balls.runs === 4 && (
                        <p className='four'>{balls.runs}</p>
                      )}
                      {balls.runs === 6 && (
                        <p className='six'>{balls.runs}</p>
                      )}
                      {balls.runs === 0 && balls.isWicket != true &&
                       <p className='zero'>
                          0
                        </p>}
                      {balls.runs === 1 && (
                        <p className='single'>{balls.runs}</p>
                      )}
                      {balls.runs === 2 && (
                        <p className='double'>{balls.runs}</p>
                      )}
                      {balls.runs === 3 && (
                        <p style={{color:'#fff'}}>{balls.runs}</p>
                      )}
                      {balls.runs === 5 && (
                        <p className='five'>{balls.runs}</p>
                      )}
                       {balls.isWicket === true && (
                        <p className='wickets'>w</p>
                      )}
                      <p style={{color:'#fff'}}>
                        {item.overNumber - 1}.{balls.ballNumber}
                      </p>
                      <div className='message'> 
                      {balls.comments[0].commentTypeId != "EndOfOver" ? (
                        <p style={{color:'#fff'}}>{balls.comments[0].message}</p>
                      ) : (
                        <p style={{color:'#fff'}}>{balls.comments[1].message}</p>
                      )}
                      </div>
                    </div>
                    <div>
                      </div>
                        </>
                    )

                })}
            </div>
        })}
    </div>
  )
}

export default Commentry