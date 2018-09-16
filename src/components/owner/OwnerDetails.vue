<template>
  <div>
    <div class="well">
      <div class="row">
        <div class="col-md-3">
          <strong>Owner name:</strong>
        </div>
        <div class="col-md-3">
          {{ owner.name }}
        </div>
      </div>
      <div class="row">
        <div class="col-md-3">
          <strong>Date of birth:</strong>
        </div>
        <div class="col-md-3">
          {{ owner.dateOfBirth }}
        </div>
      </div>
      <div
        v-if="owner.accounts && owner.accounts.length <= 2"
        class="row">
        <div class="col-md-3">
          <strong>Type of user:</strong>
        </div>
        <div class="col-md-3">
          <span class="text-success">Begginer user.</span>
        </div>
      </div>
      <div
        v-else
        class="row">
        <div class="col-md-3">
          <strong>Type of user:</strong>
        </div>
        <div class="col-md-3">
          <span class="text-info">Advanced user.</span>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-md-12">
        <div class="table-responsive">
          <table class="table table-striped">
            <thead>
              <tr>
                <th>Account type</th>
                <th>Date created</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="account in owner.accounts"
                :key="account.id">
                <td>{{ account.accountType }}</td>
                <td>{{ account.dateCreated }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import OwnerService from '@/api-services/owner.service';

export default {
  name: 'OwnerDetails',
  data() {
    return {
      owner: {}
    };
  },
  created() {
    OwnerService.getAccounts(this.$router.currentRoute.params.id).then((response) => {
      this.owner = response.data;
    });
  }
};
</script>
