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
              <owner-list-row
                v-for="owner in owners"
                :key="owner.id"
                :owner="owner"
                @details="detailsOwner"
                @update="updateOwner"
                @delete="deleteOwner"/>
            </tbody>
          </table>
        </div>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import OwnerService from '@/api-services/owner.service';
import OwnerListRow from '@/components/owner/OwnerListRow';

export default {
  name: 'OwnerList',
  components: {
    OwnerListRow
  },
  data() {
    return {
      owners: []
    };
  },
  created() {
    OwnerService.getAll().then((response) => {
      this.owners = response.data;
    });
  },
  methods: {
    detailsOwner(ownerId) {
      console.log('details', ownerId);
    },
    updateOwner(ownerId) {
      console.log('update', ownerId);
    },
    deleteOwner(ownerId) {
      console.log('delete', ownerId);
    }
  }
};
</script>
