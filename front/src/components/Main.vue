<template>
  <v-app :dark="goDark">
    <v-container class="main">
      <div style="max-width: 800px; margin: auto; margin-top: 80px;">
        <v-card style="padding: 15%;">
          <v-card-title primary-title>
          </v-card-title>
            <v-text-field
              label="Mensaje en uso"
              solo
              readonly
              v-model="textInUse"
            ></v-text-field>
            <v-text-field
              label="Introduzca el mensaje:"
              @keyup.enter.native="send() "
              outline
              color="primary"
              v-model="message"
            ></v-text-field>
          <v-card-actions>
            <v-btn depressed color="primary" v-on:click="send()">Enviar</v-btn>
          </v-card-actions>
        </v-card>
        <v-switch :label="`Dark Theme`" v-model="goDark" color="dark"></v-switch>
        <v-snackbar
          v-model="snackbar"
          :bottom="y === 'bottom'"
          :left="x === 'left'"
          :multi-line="mode === 'multi-line'"
          :right="x === 'right'"
          :timeout="timeout"
          :top="y === 'bottom'"
          :vertical="mode === 'vertical'"
        >
          {{ text }}
          <v-btn
            color="accent"
            flat
            @click="snackbar = false"
          >
            Close
          </v-btn>
        </v-snackbar>
      </div>
    </v-container>
  </v-app>
</template>

<script>
  import io from 'socket.io-client';
  export default {
    data: () => ({
      goDark: false,
      socket : io('LAPTOP-LESS:3001'),
      message: "",
      textInUse: "",
      snackbar: false,
      y: 'top',
      x: null,
      mode: '',
      timeout: 5000,
      text: ''
    }),
     methods:{
       send(){
        this.socket.emit('data',this.message);
        this.socket.on('data', (msg) => {
          this.text='Texto establecido con éxito';
          this.textInUse=this.message;
          this.snackbar=true;
        });
       }
     },
    mounted(){
    }
  }
</script>

<style>
  body{
    background-color:#EEEEEE;
  }
  h3{
    color:#C41949;
  }
</style>
