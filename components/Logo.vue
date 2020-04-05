<template>
  <img class="NuxtLogo" src="./logo.svg" width="400" height="200" />
</template>
<style>
.NuxtLogo {
  animation: 1s appear;
  margin: auto;
}

@keyframes appear {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
