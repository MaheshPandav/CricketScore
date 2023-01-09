import React from 'react'
import '../Screens/MatchDetails.scss'

const MatchDetails = () => {
    return (
        <div className='matchdetails'>
            <div className='match-header-details'>
                <div className='match-data'>
                    <p className='match-type'>
                        T20 international Men game
                    </p>
                    <div className='match-details-section'>
                        <div className='match-middle'>
                            <div className='left-team'>
                                <div className="top-view">
                                    <img
                                        src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/255px-Flag_of_India.svg.png"
                                        alt="live-img"
                                        className="hometeam-logo"
                                    />
                                    <p className="team-name">
                                        Indians
                                    </p>
                                </div>
                                <div
                                    className="scored-section-team-a">
                                    <div className="scored">
                                        <p>150/</p>
                                        <p>
                                            10
                                        </p>
                                    </div>
                                    <div>
                                        <p className="over-text">
                                            13.5 overs
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="middle">
                                <div className="middle-line" />
                                <p>V</p>
                            </div>
                            <div className='right-team'>
                                <div className="top-view">
                                    <p className="team-name">
                                        Pakistan
                                    </p>
                                    <img
                                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Flag_of_Pakistan.svg/255px-Flag_of_Pakistan.svg.png"
                                        alt="live-img"
                                        className="hometeam-logo"
                                    />
                                </div>
                                <div
                                    className="scored-section-team-b">
                                    <div className="scored">
                                        <p>150/</p>
                                        <p>
                                            10
                                        </p>
                                    </div>
                                    <div>
                                        <p className="over-text">
                                            13.5 overs
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='result-text'>
                        <p>India won the match</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MatchDetails
