<template>
  
  <div class="listGroup">
    <v-list-item  class="list" >
      <v-list-item-icon>
        <v-icon>mdi-home</v-icon>
      </v-list-item-icon>
      <a href="/" class="nav-link">Home</a>
    </v-list-item>
    <v-list-item class="list">
      <v-list-item-icon>
        <v-icon>mdi-help-box</v-icon>
      </v-list-item-icon>
      <a href="/about" class="nav-link">About</a>
    </v-list-item>
    <v-list-item class="list">
      <v-list-item-icon>
        <v-icon>mdi-phone</v-icon>
      </v-list-item-icon>
      <a href="/contact-us" class="nav-link">Contact Us</a>
    </v-list-item>
  </div>
</template>

<script>
  export default{
 
  }
</script>

<style scoped>

/* to hide the regular menu for mobile users  */
@media(max-width: 700px){
  .list {
  display: none;
}

}

/* end */
ul, .listGroup {
  position: relative;
  list-style-type: none !important; 
  margin: 0 !important;
  padding-top: 1em !important;
  overflow: hidden !important;
}

li, .list {
  float: left;
  align-content: flex-end;
}

.nav-link {
  display: flex;
  color: white;
  text-align: center;
  padding: 16px;
  text-decoration: none;
}

.v-application--is-ltr .v-list-item__icon:first-child{
  margin-right: -12px;
}
</style>





