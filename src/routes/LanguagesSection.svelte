<div class="banner">
    <div class="languagesTitle">
        Languages I'm proficient in and React
    </div>
    <div class="slider" style="--quantity: 9">
        <div class="item" style="--position: 1"><img src="https://wildcardcorp.com/image-repository/javascript-icon.png/@@images/image.png" alt=""></div>
        <div class="item" style="--position: 2"><img src="https://img.icons8.com/fluent/512/typescript.png" alt=""></div>
        <div class="item" style="--position: 3"><img src="https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png" alt=""></div>
        <div class="item" style="--position: 4"><img src="https://www.jetbrains.com/guide/assets/csharp-logo-265a149e.svg" alt=""></div>
        <div class="item" style="--position: 5"><img src="https://static-00.iconduck.com/assets.00/sql-database-generic-icon-1521x2048-d0vdpxpg.png" alt=""></div>
        <div class="item" style="--position: 6"><img src="https://cdn-icons-png.flaticon.com/512/919/919826.png" alt=""></div>
        <div class="item" style="--position: 7"><img src="https://miro.medium.com/v2/resize:fit:512/1*doAg1_fMQKWFoub-6gwUiQ.png" alt=""></div>
        <div class="item" style="--position: 8"><img src="https://cdn-icons-png.flaticon.com/512/6132/6132222.png" alt=""></div>
        <div class="item" style="--position: 9"><img src="https://cdn.iconscout.com/icon/free/png-256/free-react-logo-icon-download-in-svg-png-gif-file-formats--wordmark-programming-langugae-freebies-pack-logos-icons-1175110.png?f=webp&w=256" alt=""></div>
    </div>
</div>

<style>
    .banner{
        width: 100vw;
        height: 40vh;
        text-align: center;
        overflow: hidden;
        position: relative;
        background: #042630;
        color: white;
    }
    .banner .languagesTitle{
        position: absolute;
        font-size: min(5vw,5vh);
        width: 100%;
        left: calc(50% - width);
        top: 5vh;
    }
    .banner .slider{
        position: absolute;
        width: 75px;
        height: 75px;
        top: 50%;
        left: calc(50% - 37px);
        transform-style: preserve-3d;
        transform: perspective(1000px);
        animation: autoRun 20s linear infinite
    }
    .banner .slider .item{
        position: absolute;
        inset: 0 0 0 0;
        transform: 
            rotateY(calc((var(--position) - 1) * (360 / var(--quantity) * 1deg)))
            translateZ(15vw)
    }
    .banner .slider .item img{
        width: 100%;
        height: auto;
    } 
    @keyframes autoRun{
        from{
            transform: perspective(1000px) rotateY(0deg)
        } to{
            transform: perspective(1000px) rotateY(360deg)
        }
    }
</style>