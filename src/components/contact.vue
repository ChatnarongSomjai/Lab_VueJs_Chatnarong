<template>
   <v-container>
      <v-row justify="center">
         <v-col cols="12" sm="6" md="4">
            <v-card class="text-center" color="grey lighten-4" dark>

                  <v-avatar size="300" class="mx-auto">
                     <img
                        src="../assets/OIP.jpg"
                        class="my-3"
                        contain
                        height="200%"
                     />
                  </v-avatar>
                  <br /><br /><br/>
                <v-card-text class="text-left">
                  <p class="profile-info">Email: <span class="profile-info">{{ email }}</span></p>
                  <br />
                  <p class="profile-info">Phone Number: <span class="profile-info">{{ phone }}</span></p>
                  <br />
                  <p class="profile-info">Facebook: <span class="profile-info">{{ facebook }}</span></p>
                  <br />
                  <p class="profile-info">Address: <span class="profile-info">{{ address }}</span></p>
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
      email: 'soraka0236@gmail.com',
      phone: '098-364-2614',
      facebook: 'Chatnarong Somjai',
      address: 'Lumlukka, Pathum thani, Thailand'
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
