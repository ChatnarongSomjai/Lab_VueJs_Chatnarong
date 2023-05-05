<template>
   <v-container>
      <v-row justify="center">
         <v-col cols="12" sm="6" md="4">
            <v-card class="text-center" color="grey lighten-4" dark>

                  <v-avatar size="300" class="mx-auto">
                     <img
                        src="../assets/aria.png"
                        class="my-3"
                        contain
                        height="200%"
                     />
                  </v-avatar>
                  <br /><br /><br/>
                <v-card-text class="text-left">
                  <p class="profile-info">Project Name: <span class="profile-info">{{ proname }}</span></p>
                  <br />
                  <p class="profile-info">About: <span class="profile-info">{{ aname }}</span></p>
                  <br />
                  <p class="profile-info">Tools: <span class="profile-info">{{ tools }}</span></p>
                  <br />
                  <p class="profile-info">GameTags: <span class="profile-info">{{ tags }}</span></p>
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
      proname: 'Aria The Adventure',
      aname: 'Game Development',
      tools: 'Unity, Clip Studio Paint, VisualCode',
      tags: 'Suvival, Adventure, Action, Fantasy, Single Player'
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
  border: 15px solid red;
   margin: 40px;
}

.text-center {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

</style>
