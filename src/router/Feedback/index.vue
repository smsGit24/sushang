<template>
  <div class="feedback">
    <box gap="10px 10px">
      <group>
        <x-textarea style="border: 1px solid #D9D9D9" placeholder="请输入您的反馈意见" :rows="6" v-model="suggestion"></x-textarea>
      </group>
      <group>
        <x-input style="border: 1px solid #D9D9D9" placeholder="联系方式" ref="input" v-model="contact"></x-input>
      </group>
      <group>
        <x-button action-type="button" @click="submit" :gradients="['#FF5E3A', '#FF9500']">提交</x-button>
      </group>
    </box>
  </div>
</template>

<script>
import { Box, Group, XInput, XTextarea, XButton } from 'vux'
export default {
  components: {
    Box,
    XInput,
    Group,
    XTextarea,
    XButton
  },
  data () {
    return {
      suggestion: '',
      contact: ''
    }
  },
  methods: {
    submit () {
      console.log('submit')
    }
  }
}
</script>

<style lang="less" scoped>
</style>

