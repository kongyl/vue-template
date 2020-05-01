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
                <CInput placeholder="用户名">
                  <template #prepend-content><CIcon name="cil-user" /></template>
                </CInput>
                <CInput placeholder="密码" type="password">
                  <template #prepend-content><CIcon name="cil-lock-locked" /></template>
                </CInput>
                <CRow>
                  <CCol col="6" class="text-left">
                    <CButton color="primary" class="px-4">登录</CButton>
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
  name: 'Login'
};
</script>
