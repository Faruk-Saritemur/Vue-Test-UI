<template>
  <div class="login-item">
    <v-btn class="button-login" @click="dialog = true">GİRİŞ YAP</v-btn>
    <v-dialog class="dialog-item" v-model="dialog">
      <v-card>
        <v-card-title>Kullanıcı Bilgilerini Giriniz</v-card-title>
        <v-card-text>
          <v-text-field v-model="userNameValue" :error="isError" label="Kullanıcı adınız..." class="inputClass"></v-text-field>
          <v-text-field v-model="userPasswordValue" :error="isError" label="Şifreniz..." class="inputClass"></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn @click="dialog = false">Vazgeç</v-btn>
          <v-btn @click="saveEvent">Giriş</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog class="dialog-item" v-model="success">
      <v-card>
        <v-card-actions>
          <v-icon class="iconSuccess" color="success">mdi-check-circle</v-icon>
          <v-label :text="successText"></v-label>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog class="dialog-item" v-model="fail">
      <v-card>
        <v-card-actions>
          <v-icon class="iconFail" color="error">mdi-alert-circle</v-icon>
          <v-label :text="failText"></v-label>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      userNameValue: '',
      userPasswordValue: '',
      dialog: false,
      success: false,
      fail: false,
      successText: 'Merhaba yeni katılımcı!',
      failText: 'Hata',
      isError: false,
      saved: false
    }
  },
  methods: {
    saveEvent() {
      if ((this.userNameValue == '') || (this.userPasswordValue == '')) {
        this.fail = true;
        this.failText = `Eksik bilgi girişi`;
        this.isError = true;
      }
      else {
        this.dialog = false;
        this.success = true;
        this.saved = true;
        this.successText = `Merhaba ${this.userNameValue}. Başarılı bir şekilde giriş yaptınız...`;
      }
      this.userNameValue = null;
      this.userPasswordValue = null;
    }
  }
}
</script>
<style scoped>
.inputClass {
  width: 50%;
}

.iconSuccess {
  padding-right: 30px;
  padding-left: 20px;
}

.button-login {
  position: absolute;
  width: 200px;
  align-self: center;
  right: 0%;
  top: 0%;
  background-color: lightgrey;
}

.dialog-item {
  max-width: 40%;
}
</style>
