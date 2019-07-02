import React from 'react';

function Home(){

    return(

        <React.Fragment>
            <section class="hero is-medium is-primary is-bold">
                <div class="hero-body">
                <div class="container">
                    <h1 class="title">Hero Section</h1>
                    <h2 class="subtitle">Basic Layout Skeleton using Bulma CSS Framework</h2>
                </div>
                </div>
            </section>

            <section class="section">
                <div class="container">
                <h1 class="title">Section Example</h1>
                <h2 class="subtitle">A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading</h2>
                </div>
            </section>
            
            <section class="level is-mobile">
            <div class="container">
                <div class="level-item has-text-centered">
                <div>
                    <p class="heading">Tweets</p>
                    <p class="title">3,456</p>
                </div>
                </div>
                <div class="level-item has-text-centered">
                <div>
                    <p class="heading">Following</p>
                    <p class="title">123</p>
                </div>
                </div>
                <div class="level-item has-text-centered">
                <div>
                    <p class="heading">Followers</p>
                    <p class="title">456K</p>
                </div>
                </div>
                <div class="level-item has-text-centered">
                <div>
                    <p class="heading">Likes</p>
                    <p class="title">789</p>
                </div>
                </div>
            </div>
            </section>
        </React.Fragment>
    );
}

export default Home;
