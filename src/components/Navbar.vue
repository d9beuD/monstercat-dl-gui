<template>
  <div>
    <div class="text-center pt-2">
      <b-img :src="'/logo@512x512.png'" fluid :style="{width:'75%'}"></b-img>
    </div>
    <b-navbar class="main-navbar">
      <b-navbar-brand class="text-center">monstercat-dl-gui</b-navbar-brand>
      <b-navbar-nav>
        <b-nav-item :to="{ name: 'home' }" active-class="active">
          <fa-icon icon="home"></fa-icon>
          Home
        </b-nav-item>
        <b-nav-item :to="{ name: 'browse' }" active-class="active">
          <fa-icon icon="search"></fa-icon>
          Browse
        </b-nav-item>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>
