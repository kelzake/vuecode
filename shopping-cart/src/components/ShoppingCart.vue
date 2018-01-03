<template>
  <div>
    <div class="item-container">
      <div class="item-wrap">
        <ul class="item-list">
          <li class="item-head">
            <span>&nbsp;</span>
            <span>&nbsp;</span>
            <span>商品名称</span>
            <span>单价</span>
            <span>数量</span>
            <span>总额</span>
            <span>操作</span>
          </li>
          <li v-for="item in commodits">
            <span><a class="checkbox-a" :class="{'checked':item.checked}"  @click="selectItem(item)"></a></span>
            <a class="item-image-case"><img :src="item.imagepath"></a>
            <span>{{item.name}}</span>
            <span class="">{{item.price | toFixed}}</span>
            <div class="item-queunit">
                <a @click="reduety(item)">-</a>
                <input type="text" v-model="item.quentity" disabled >
                <a @click="addQuety(item)">+</a>
            </div>
            <span>{{itemCount(item) | toFixed}}</span>
            <span><a class="item-rebtn" @click="toConfirm(item)">删除</a></span>
          </li>
        </ul>
      </div>
      <div class="confirm-layer" v-show="confirm">
        <div class="confirm-panel">
          <p>确定要删除这个商品？</p>
          <a @click="deleteItem(deleteid)">确定</a>
          <a @click="cancel()">取消</a>
        </div>
      </div>    
    </div>
    <div class="item-cart">
      <a class="checkbox-a" :class="{'checked':selectall}"  @click="toggleAll()"></a>
      <span class="item-text">全选</span>
      <button type="button" class="item-checkout">去结算：{{totalPrice | toFixed}}</button>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      commodits:[],
      selectall:false,
      totalprice:0,
      confirm:false,
      deleteid:null
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
  computed:{
    totalPrice:function(){
      this.totalprice = 0;
      this.commodits.forEach((item,index)=>{
        if(item.checked){
          this.totalprice += item.countprice;
        }
      })
      return this.totalprice
    }
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
      var count = 0;
      this.commodits.forEach((item,index)=>{
        if(item.checked){
          count++
        }
      })
      if(count == this.commodits.length){
        this.selectall = true
      }else{
        this.selectall = false
      }
    },
    toggleAll:function(){
      if(this.selectall){
        this.selectall = false;
        this.commodits.forEach((item,index)=>{
          if(typeof(item.checked) ==="undefined"){
            this.$set(item,"checked",false)
          }else{
            item.checked = false;
          }
        })
      }else{
        this.selectall = true;
        this.commodits.forEach((item,index)=>{
          if(typeof(item.checked) ==="undefined"){
            this.$set(item,"checked",true)
          }else{
            item.checked = true;
          }
        })
      }
    },
    itemCount:function(item){
      this.$set(item,"countprice",item.quentity*item.price)
      return  item.countprice
    },
    toConfirm:function(item){
      this.confirm = true;
      this.deleteindex = this.commodits.indexOf(item);

    },
    deleteItem:function(id){
      this.commodits.splice(this.deleteindex,1)
      this.deleteindex = null;
      this.confirm = false;
    },
    cancel:function(){
      this.deleteindex = null;
      this.confirm = false;
    }
  }
}
</script>
