<style lang="scss">
    @font-face {
        font-family: 'PTSerif';
        src: url('/fonts/pt-serif/PTSerif-Regular.eot') format('truetype');
        src: url('/fonts/pt-serif/PTSerif-Regular.eot?#iefix') format('embedded-opentype'),
            url('/fonts/pt-serif/PTSerif-Regular.ttf') format('truetype'),
            url('/fonts/pt-serif/PTSerif-Regular.svg#MenomoniaRegular') format('svg');
        font-weight: normal;
        font-style: normal;
    }

    body {
        font-family: 'PTSerif';
    }
</style>

<script lang="ts">
    const worldBosses = ["Megadest", "Fire Ele", "Thaida Cov"];
    
    var currentBossPointer = 0;
    var nextBoss = worldBosses[0];

    function setZoneTimers() {
        currentBossPointer = currentBossPointer == worldBosses.length - 1 ? 
            0 : currentBossPointer + 1;
        
        nextBoss = worldBosses[currentBossPointer];
    }
</script>

<h1>Event Timers</h1>

<div>
    <button on:click={setZoneTimers}>Central Tyria</button>
    <button>Maguuma Jungle</button>
    <button>Elona</button>
    <button>Cantha</button>
</div>
<div>
    <p>PlaceHolder, fetch timers from API</p>
    <p>{nextBoss}</p>
</div>