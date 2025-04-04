<div class="backgroundSection">
    <div class="introText">
        I'm a full stack developer with experience in React, C#, and SQL. I also love golfing, movies, and late night Taco Bell runs.
    </div>
    <div class="profilePicture">
        <img src="https://media.licdn.com/dms/image/v2/C4E03AQFRXHrvxx2Tmw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1579314906284?e=1749081600&v=beta&t=L2RWaGD_ma0cIX9R7U_RCyuhnHzE_WxJo0x_Mj-rISg" alt="">
    </div>
</div>

<style>
    .backgroundSection{
        height: 30vh;
        display: flex;
        justify-content: center;
        flex-direction: column;
        position: relative;
    }
    /**
    * Shout out to this link since I thought it was cool and wanted to use it for my
    portfolio :)
    https://css-tricks.com/snippets/css/typewriter-effect/
    */
    .introText{
        overflow: hidden;
        font-size: 1vw;
        border-right: .15em solid white;
        white-space: nowrap;
        margin: 0 auto;
        letter-spacing: .15em;
        animation:
            typing 3.5s steps(40, end),
            blinker 0.5s step-end infinite;
    }
    .profilePicture img{
        --width: min(20vw, 20vh);
        height: var(--width);
        position: absolute;
        top: calc(-0.5 * var(--width));
        left: calc(50% - 0.5  * var(--width));
        border-radius: 50%
    }
    @keyframes blinker{
        from, to {border-color: transparent}
        50% {border-color: rgb(2, 11, 54)}
    }
    @keyframes typing{
        from { width: 0% }
        to { width: 100% }
    }
</style>