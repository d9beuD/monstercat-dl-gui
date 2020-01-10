<template>
  <div>
    <b-container fluid>
      <div class="d-flex justify-content-between align-items-center">
        <h1>Browse</h1>
        <router-link to="/browse/search" class="h4">
          <fa-icon icon="search"></fa-icon>
        </router-link>
      </div>
    </b-container>
    <router-view></router-view>
  </div>
</template>
