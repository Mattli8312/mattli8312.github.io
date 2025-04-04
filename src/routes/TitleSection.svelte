<div class="titleSection">
    <div class="item" style="--position: 0">W</div>
    <div class="item" style="--position: 1">e</div>
    <div class="item" style="--position: 2">l</div>
    <div class="item" style="--position: 3">c</div>
    <div class="item" style="--position: 4">o</div>
    <div class="item" style="--position: 5">m</div>
    <div class="item" style="--position: 6">e</div>
    <div class="item" style="--position: 7">!</div>
    <div class="hider"></div>
</div>

<style>
    .titleSection{
        --characterWidth: min(10vw, 10vh);
        --backgroundColor: #041421;
        color: white;
        background: var(--backgroundColor);
        display: flex;
        flex-direction: row;
        position: relative;
        gap: 8px;
        padding-left: min(5vw, 5vh);
        padding-top: min(5vw, 5vh);
        width: 100vw;
        height: 20vh;
    }
    .titleSection .item{
        position: relative;
        font-size: var(--characterWidth);
        font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        animation: animate 0.8s ease infinite alternate;
        animation-delay: calc(var(--position) * 100ms);
        top: min(5vw, 5vh);
    }
    @keyframes animate{
        100%{
            transform: translateY(-40px)
        }
    }
</style>