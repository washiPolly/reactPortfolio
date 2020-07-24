import React from 'react'
import profileImg from '../images/profile.jpg'

export default function Home() {
    return (
        <div>
            <div >
                <img className="bio-image" src={profileImg} alt="profile image" />
            </div>


            <div id="AboutMe" className="container">
                <div className="row col-md-12">
                    <div id="about-me">
                        <h1 >Hello World!</h1>
                    </div>

                    {/* <div id="bar" className="col-md-10" /> */}

                    {/* <div className="card border-dark mb-3"> */}
                    {/* <div className="row"> */}
                    <div className="col-md-4">


                    </div>
                    <div>
                        <div className="card-2">
                            Thank you for visiting my very first webpage. This is very exciting to be able to learn web development from scratch.
                            I know it will take a lot hard work and persistence to complete the course
                            but I look forward to all the new skills I will gain!

                            Pictured above is my husky bae name Mason,
                            we just celebrated his 5th birthday a couple months ago!
                            Mason loves to run, play, snack, nap, and get into trouble.
                            In my spare time I like to draw, watch movies, and play badminton with friends.
  </div>
                    </div>

                </div>
            </div>
        </div >

    )
}
