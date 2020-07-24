import React from 'react'

export default function Navbar() {
    return (
        <div>
            <nav>
                <div class="nav nav-tabs" id="nav-tab" role="tablist">
                    <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="home" role="tab" aria-controls="nav-home" aria-selected="true">Polly Su</a>
                    <a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="portfolio" role="tab" aria-controls="nav-profile" aria-selected="false">Portfolio</a>
                    <a class="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="contact" role="tab" aria-controls="nav-contact" aria-selected="false">Contact</a>
                </div>
            </nav>
            <div class="tab-content" id="nav-tabContent">
                <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">

                </div>
                <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">

                </div>
                <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">

                </div>
            </div>
        </div>
    )
}