<template>   
    
    <div>
    <keep-alive>
      <component :is="dynamicComponent"></component>
    </keep-alive>
  </div> 
</template> 
 
<script>  
  // Register another component to render in this one dynamically.
  import ID from 'ID';  
  ID.component('Gender', 
                {   template: `<p>Wheee</p>` });  


var View01 = {
  template: `<button id="view1" @click="swapComponent('view-02')" type="submit">NEXT VIEW</button>`,
  props: ['swapComponent']
}
new Vue({
  el: '#app',
  data: {
    currentComponent: 'ID'
  },
  components: {
   'ID': View01,
    'Gender': View02,
  },
  methods: {
    swapComponent: function(component) {
      this.currentComponent = component;
    }
  }
});





                
  export default {   
    data() {     
            return {       
              dynamicComponent: `Gender`     
                   }   
              } 
         } 
         
</script>