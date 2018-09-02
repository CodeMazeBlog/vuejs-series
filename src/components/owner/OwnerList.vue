<template>
  <div>
    <b-row>
      <b-col
        md="2"
        offset-md="10">
        <a href="#">Create owner</a>
      </b-col>
    </b-row>
    <br>
    <b-row>
      <b-col md="12">
        <div class="table-responsive">
          <table class="table table-striped">
            <thead>
              <tr>
                <th>Owner name</th>
                <th>Owner address</th>
                <th>Date of birth</th>
                <th>Details</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="owner in owners"
                :key="owner.id">
                <td>{{ owner.name }}</td>
                <td>{{ owner.address }}</td>
                <td>{{ owner.dateOfBirth }}</td>
                <td>
                  <b-button variant="default">Details</b-button>
                </td>
                <td>
                  <b-button variant="success">Update</b-button>
                </td>
                <td>
                  <b-button variant="danger">Delete</b-button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import OwnerService from '@/api-services/owner.service';

export default {
  name: 'OwnerList',
  data() {
    return {
      owners: []
    };
  },
  created() {
    OwnerService.getAll().then((response) => {
      this.owners = response.data;
    });
  }
};
</script>
