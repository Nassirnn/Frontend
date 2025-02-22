<template>
  <div>
    <v-btn @click="callApi">Call</v-btn>
  </div>
</template>

<script>
  // import axios from 'axios';

  export default {
    name: 'external-api',
    methods: {
      // async callApi() {
      //   // Get the access token from the auth wrapper
      //   const token = await this.$auth.getTokenSilently();
      //   console.log(token)
      //   // Use Axios to make a call to the API   
      //   const { data } = await axios.get('https://CCSystemsAPI/api', {
      //     headers: {
      //       Authorization: `Bearer <%= "${token}" %>` // send the access token through the 'Authorization' header
      //     }
      //   });
      //   console.log("Hello")
      //   console.log(data)
      // }
    }
  };
</script>