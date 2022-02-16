<template>
  <div>
    <p>Home Page</p>
     <CreateContact/>
  </div>
</template>

<script>
import CreateContact from "../components/CreateContact"
export default {
  name: 'Home',
  components:{CreateContact}
}
</script>