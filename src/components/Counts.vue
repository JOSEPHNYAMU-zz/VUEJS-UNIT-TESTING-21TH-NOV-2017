<template>
    <di>
        <input style="border:none;" disabled type="text" :value="counts + ' Task(s)'" @input="showAll"/>
    </di>
</template>
<script>
  export default {
    props: ['counts'],
    data () {
      return {
        counts: ''
      }
    },
    methods: {
      showAll (event) {
        this.counts = event.target.value
        this.$emit('showAlls', this.counts)
      }
    }
  }
</script>
