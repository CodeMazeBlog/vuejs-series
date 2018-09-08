<template>
  <tr>
    <td>{{ owner.name }}</td>
    <td>{{ owner.address }}</td>
    <td>{{ owner.dateOfBirth }}</td>
    <td>
      <b-button
        variant="default"
        @click="onDetailsClick">Details</b-button>
    </td>
    <td>
      <b-button
        variant="success"
        @click="onUpdateClick">Update</b-button>
    </td>
    <td>
      <b-button
        variant="danger"
        @click="onDeleteClick">Delete</b-button>
    </td>
  </tr>
</template>
<script>
export default {
  name: 'OwnerListRow',
  props: [ 'owner' ],
  methods: {
    onDetailsClick() {
      this.$emit('details', this.owner.id);
    },
    onUpdateClick() {
      this.$emit('update', this.owner.id);
    },
    onDeleteClick() {
      this.$emit('delete', this.owner.id);
    }
  }
};
</script>
