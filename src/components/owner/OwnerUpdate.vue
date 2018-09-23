<template>
  <b-container fluid>
    <div class="form-wrapper">
      <b-form @submit.prevent="updateOwner">
        <b-form-group
          :label-cols="2"
          breakpoint="md"
          horizontal
          label="Name of the owner:"
          for="name">
          <b-col :md="5">
            <b-input
              id="name"
              v-model="formData.name"
              maxlength="60"
              required />
          </b-col>
        </b-form-group>

        <b-form-group
          :label-cols="2"
          breakpoint="md"
          horizontal
          label="Date of birth:"
          for="dateOfBirth">
          <b-col :md="5">
            <b-input
              id="dateOfBirth"
              v-model="formData.dateOfBirth"
              type="date"
              required />
          </b-col>
        </b-form-group>

        <b-form-group
          :label-cols="2"
          breakpoint="md"
          horizontal
          label="Address:"
          for="Address">
          <b-col :md="5">
            <b-input
              id="Address"
              v-model="formData.address"
              maxlength="100"
              required />
          </b-col>
        </b-form-group>

        <br ><br >

        <b-col
          :md="5"
          offset="4">
          <b-button
            type="submit"
            variant="info">Save</b-button>
          <b-button
            :to="{ name: 'OwnerList' }"
            variant="danger">Cancel</b-button>
        </b-col>
      </b-form>
    </div>

    <b-modal
      ref="alertModal"
      :title="alertModalTitle"
      :ok-only="true"
      @ok="onAlertModalOkClick">
      <p class="my-4">{{ alertModalContent }}</p>
    </b-modal>
  </b-container>
</template>
<script>
import OwnerService from '@/api-services/owner.service';

export default {
  name: 'OwnerUpdate',
  data() {
    return {
      formData: {
        name: '',
        dateOfBirth: '',
        address: ''
      },
      alertModalTitle: '',
      alertModalContent: '',
      isSuccessfully: false
    };
  },
  created() {
    OwnerService.get(this.$router.currentRoute.params.id).then((response) => {
      this.formData.name = response.data.name;
      this.formData.dateOfBirth = response.data.dateOfBirth.split('T')[0];
      this.formData.address = response.data.address;
    });
  },
  methods: {
    updateOwner() {
      OwnerService.update(this.$router.currentRoute.params.id, this.formData).then(() => {
        this.isSuccessfully = true;
        this.alertModalTitle = 'Successfully';
        this.alertModalContent = 'Successfully updated Account Owner';
        this.$refs.alertModal.show();
      }).catch((error) => {
        this.isSuccessfully = false;
        this.alertModalTitle = 'Error';
        this.alertModalContent = error.response.data;
        this.$refs.alertModal.show();
      });
    },
    onAlertModalOkClick() {
      if (this.isSuccessfully) {
        this.$router.push({ name: 'OwnerList' });
      }
    }
  }
};
</script>
<style>
.form-wrapper {
  margin-top: 20px;
  min-height: 20px;
  padding: 19px;
  margin-bottom: 20px;
  background-color: #f5f5f5;
  border: 1px solid #e3e3e3;
  border-radius: 4px;
  box-shadow: inset 0 1px 1px rgba(0,0,0,.05);
}
</style>
