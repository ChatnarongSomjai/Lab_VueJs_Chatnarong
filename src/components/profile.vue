<template>
   <v-container>
      <v-row justify="center">
         <v-col cols="12" sm="6" md="4">
            <v-card class="text-center" color="grey lighten-4" dark>

                  <v-avatar size="300" class="mx-auto">
                     <img
                        src="../assets/profile.png"
                        class="my-3"
                        contain
                        height="200%"
                     />
                  </v-avatar>
                  <br /><br /><br/>
                <v-card-text class="text-left">
                  <p class="profile-info">Name: <span class="profile-info">{{ firstName }}</span></p>
                  <br />
                  <p class="profile-info">Nickname: <span class="profile-info">{{ nickname }}</span></p>
                  <br />
                  <p class="profile-info">Age: <span class="profile-info">{{ age }}</span></p>
                  <br />
                  <p class="profile-info">Skills: <span class="profile-info">{{ skills }}</span></p>
               </v-card-text>
            </v-card>
         </v-col>
      </v-row>
   </v-container>
</template>

<script>
export default {
   name: 'profile',

   data: () => ({
      firstName: 'Chatnarong Somjai',
      nickname: 'Jet',
      age: 22,
      skills: 'HTML, CSS, JavaScript, Vue.js, C#, C++'
   })
}
</script>

<style>
.profile-info {
  font-size: 18px;
  font-size: 18px;
  color: #333333;
   text-align: left;
  margin-left: 20;
}

.v-card {
  border: auto solid red;
   margin: auto;
}

.text-center {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

</style>
