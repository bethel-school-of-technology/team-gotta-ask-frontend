<!--CSS needs to be added to this page, remember to prioritze the look for mobile-->
<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Action Page</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Blank</ion-title>
        </ion-toolbar>
      </ion-header>

      <div id="container">
        <div id="actionText">
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt"
          </p>
        </div>
        <ion-list id="statBar">
          <!--  icon is not currently rendering, will fix later -->
          <ion-icon name="person"></ion-icon>
          <ion-list id="stats">
            <ion-item>Zandek</ion-item>
            <ion-item>HP: 100</ion-item>
            <ion-item>Atk: 25</ion-item>
          </ion-list>
        </ion-list>
        <div id="path">
          <!-- Routing to be decided with backend progress -->
          <ion-button color="primary">Continue</ion-button>
        </div>
        <div id="actionButtons">
          <!--  -->
          <ion-button class="aButton" color="danger">Attack</ion-button>
          <ion-button class="aButton" color="medium">Defend</ion-button>
          <ion-button class="aButton" color="success">Heal</ion-button>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script src="./Script/actionPage.js"></script>
<style src="./CSS/actionPage.css" scoped></style>