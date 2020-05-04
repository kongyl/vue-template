<template>
  <CContainer class="d-flex content-center min-vh-100">
    <CRow>
      <CCol>
        <CCardGroup>
          <CCard class="p-4">
            <CCardBody>
              <CForm>
                <h1>模板系统</h1>
                <p class="text-muted">登录</p>
                <CInput id="username" placeholder="用户名" name="username" v-model="username">
                  <template #prepend-content><CIcon name="cil-user" /></template>
                </CInput>
                <CInput id="password" placeholder="密码" type="password" name="password" v-model="password">
                  <template #prepend-content><CIcon name="cil-lock-locked" /></template>
                </CInput>
                <CRow>
                  <CCol col="6" class="text-left">
                    <CButton color="primary" class="px-4" @click.prevent="login">登录</CButton>
                  </CCol>
                  <CCol col="6" class="text-right">
                    记住我
                  </CCol>
                </CRow>
              </CForm>
            </CCardBody>
          </CCard>
        </CCardGroup>
      </CCol>
    </CRow>
  </CContainer>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      username: '',
      password: '',
      isRemember: false,
      redirect: undefined
    }
  },
  watch: {
    $route: {
      handler: function(route) {
        this.redirect = route.query && route.query.redirect
      },
      immediate: true
    }
  },
  methods: {
    login() {
      if (!this.username) {
        document.getElementById('username').focus();
        return;
      }
      if (!this.password) {
        document.getElementById('password').focus();
        return;
      }
    }
  }
};
</script>
