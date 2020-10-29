<template>
  <div class="rate" :class="{'disabled':disabled}">
    <i v-for="(i, index) in 5" class="far fa-star text-warning" :key="index" @mouseenter="disabled?'':curScore=i" @mouseleave="disabled?'':curScore=''" @click="disabled?'':setScore(i)" :class="getClass(i)">
      <!-- <i v-if="disabled&&i==Math.floor(score)+1" class="fas fa-star" :style="'width:' + width"></i> -->
    </i>
  </div>
</template>

<script>
  export default {
    name:'Star',
    data() {
      return {
        curScore: '',
        width:'',
      }
    },
    props: {
      score: {
        type: Number,
        default: 0,
        // required: true
      },
      disabled: {
        type: Boolean,
        default: false,
      },
    },
    methods: {
      getClass(i) {
        if (this.curScore === '') {
          return i <= this.score ? 'fas fa-star' : 'far fa-star'
        } else {
          return i <= this.curScore ? 'fas fa-star' : 'far fa-star'
        }
      },
      getDecimal() {
        this.width=Number(this.score * 100 - Math.floor(this.score) * 100)+'%';
      },
      setScore(i){
        this.$emit('update:score',i);//使用`.sync`修饰符，对score 进行“双向绑定
      }
    },
    created: function () {
      this.getDecimal();
    },
  }
</script>