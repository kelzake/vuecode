<template>
  <div class="item-container">
    <div class="item-wrap">
      <ul class="item-list">
        <li v-for="item in commodits">
          <a class="checkbox-a" :class="{'checked':item.checked}"  @click="selectItem(item)"></a>
          <span>{{item.name}}</span>
          <span>{{item.price | toFixed}}</span>
          <input type="text" v-model="item.quentity" disabled >
          <span @click="addQuety(item)">+</span>
          <span @click="reduety(item)">-</span>
          <span>{{itemCount(item) | toFixed}}</span> 
        </li>
      </ul>
    </div>
    <div class="shopping-cart">
    全选 <a class="checkbox-a" :class="{'checked':selectall}"  @click="toggleAll()"></a>
    </div>    
  </div>
</template>

<script>
export default {
  data(){
    return {
      commodits:[],
      selectall:false
    }
  },
  filters:{
    toFixed:function(price){
      return "￥"+ price.toFixed(2)
    }
  },
  created(){
    this.getCommodits()
  },
  watch:{
    '$route': 'getCommodits'
  },
  methods:{
    getCommodits:function(){
      this.$axios.get(' http://localhost:3000/items').then((res)=>{
        if(res.data.length > 0){
          this.commodits = res.data
        }else{
          console.log("无数据")
        }
      })
    },
    addQuety:function(item){
      item.quentity++
    },
    reduety:function(item){
      item.quentity--;
      if(item.quentity<1){
        item.quentity=1
      }
    },
    selectItem:function(item){
      if(typeof(item.checked) === "undefined"){
        this.$set(item,'checked',true);  
      }else{
        item.checked = !item.checked;
      }
    },
    toggleAll:function(){
      var _this = this;
      if(this.selectall){
        this.selectall = false;
        this.commodits.forEach(function(item,index){
          if(typeof(item.checked) ==="undefined"){
            _this.$set(item,"checked",false)
          }else{
            item.checked = false;
          }
        })
      }else{
        this.selectall = true;
        this.commodits.forEach(function(item,index){
          if(typeof(item.checked) ==="undefined"){
            _this.$set(item,"checked",true)
          }else{
            item.checked = true;
          }
        })
      }
    },
    itemCount:function(item){
      return  item.quentity*item.price
    }
  }
}
</script>

<style>
  .item-container {
    max-width: 640px;
    min-width: 320px;
    height: 720px;
    margin: 0 auto;
    color: #ffffff;
    background-color: #ffffff; 
  }
  .checkbox-a{
    background-color: #FFF; 
    border: 1px solid #C1CACA; 
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05); 
    padding: 9px; 
    border-radius: 5px; 
    display: inline-block; 
    position: relative; 
    margin-right: 30px; 
  }
  .checkbox-a.checked{
    background-color: #ECF2F7; 
    border: 1px solid #92A1AC; 
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05), inset 15px 10px -12px rgba(255, 255, 255, 0.1); 
    color: #243441; 
  }
  .checkbox-a.checked:after{
    content: '\2714'; 
    position: absolute; 
    top: 0px; 
    left: 0px; 
    color: #758794; 
    width: 100%; 
    text-align: center; 
    font-size: 1em; 
    padding: 1px 0 0 0; 
    vertical-align: text-top; 
  }
  .item-list > li{
    color: #222222;
    padding: 10px;
    border-bottom: 1px solid #ccc;
  }
</style>
