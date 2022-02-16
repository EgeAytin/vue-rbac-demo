<template>
  <div v-if="isAuthorized">
    <button type="button">Create Contact</button>
  </div>
  <div v-else>
    <div>You don't have permission to create contact</div>
  </div>
</template>

<script>
import user from '../user.json'
export default {
  data() {
    return {
      isAuthorized: false,
    };
  },
  async created() {
    if (
      //if user is admin or super admin
      user.role === "super_admin" ||
      user.role === "admin" ||
      //if have necessary permission
      user.role.permissions.some((p) => p.key === "create-contact")
    ) {
      this.isAuthorized = true;
    } 
  },
};
</script>