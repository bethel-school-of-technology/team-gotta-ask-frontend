<template>
  <ion-page>
    <ion-content>

      <div id="container">
        <h1 id="title">Game Over!</h1>
      
        <div id="textDiv">
            <p id="text">As the world fades around you, you question: "What could I have done differently?"</p>
        </div>

        <div id="buttonDiv">
          <button id="button" class="nes-btn is-primary" @click="deletePlayer()">Play Again</button>
        </div>

      </div>

    </ion-content>
  </ion-page>
</template>

<script src="./Script/gameOverPage.js"></script>
<style src="./CSS/gameOverPage.css" scoped></style>