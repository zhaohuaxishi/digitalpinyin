<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { pinyinDataBase, PinyinPronunciation } from '../database'
import { Headset, Promotion, RefreshRight } from '@element-plus/icons-vue'
import { shuffle } from 'lodash'
import rightAudio from "../assets/right.wav"
import vectoryAudio from "../assets/vectory.wav"

const btnTypeList = ["primary", "success", "info", "warning", "danger"]

interface DigitalPinyin extends PinyinPronunciation {
  value: number
  btnType: string
}

const selectedUnit = ref(0)
const pinyinUnitOption = pinyinDataBase.map((item) => ({
  value: item.label,
  label: item.label
}))

// 用户选择单元之后，动态变更单元数据
const digitalPinyinList = computed(() =>
  pinyinDataBase[selectedUnit.value].data.map((item) =>
    ({ ...item, value: Math.floor(Math.random() * 100), btnType: "default" })
  ))

// 单元数据的拷贝，用户点击之后会变更北京颜色
const pinyinList = ref<DigitalPinyin[]>([...digitalPinyinList.value])
watch(digitalPinyinList, async () => {
  let copy = [...digitalPinyinList.value]
  pinyinList.value = shuffle(copy)
})

const onPinyinSelected = (clickedItem: DigitalPinyin) => {
  pinyinList.value = pinyinList.value.map((item) => {
    if (item.id !== clickedItem.id) {
      return item
    }

    let selectedPinyin = selectedPinyinList.value.find((pinyin) => pinyin.id === clickedItem.id)
    if (!selectedPinyin || selectedPinyin.btnType == item.btnType) {
      playAudio(clickedItem)
      return item
    }

    let index = selectedPinyinList.value.indexOf(selectedPinyin)
    let correctCount = pinyinList.value.filter((pinyin) => pinyin.btnType !== "default").length
    if (index == correctCount) {
      rate.value = rate.value + 1
      playAudioUri(rightAudio)
      return selectedPinyin
    } else {
      playAudio(clickedItem)
      return item
    }
  })
}

// 随机选出一些用于做加法的值
const randomNumber = () => Math.floor(Math.random() * 4) + 2
const pinyinNumber = ref(randomNumber())
const selectedPinyinList = computed((): DigitalPinyin[] => {
  let pyinListCopy = shuffle(digitalPinyinList.value)
  return pyinListCopy.slice(0, pinyinNumber.value).map((item, index) => ({ ...item, btnType: btnTypeList[index] }))
})

const playAudio = (item: DigitalPinyin) => {
  playAudioUri(item.uri)
}

const playAudioUri = (uri: string) => {
  new Audio(uri).play()
}

// 计算的结果
const sum = ref(0)
const rate = ref(0)

const calculate = () => {
  let values = selectedPinyinList.value.map((item) => item.value)
  let target = values.reduce((previous, current) => { return previous + current }, 0)
  console.log(target, sum.value)
  if (sum.value == target) {
    playAudioUri(vectoryAudio)
    rate.value = 10
  }
}

const refreshContent = () => {
  pinyinNumber.value = 0
  pinyinNumber.value = randomNumber()
  pinyinList.value = [...digitalPinyinList.value]
  rate.value = 0
  sum.value = 0
}

</script>

<template>
  <div class="d-flex flex-row justify-content-center align-items-center m-3">
    <el-select v-model="selectedUnit" style="width: 240px" @change="refreshContent">
      <el-option v-for="(item, index) in pinyinUnitOption" :key="item.value" :label="item.label" :value="index" />
    </el-select>
  </div>
  <el-divider />
  <div class="d-flex flex-row justify-content-center align-items-center m-1">
    <div v-for="(item, index) in selectedPinyinList" class="p-0">
      <el-button size="large" @click="playAudio(item)" :icon="Headset" circle class="p-3" :type="item.btnType" />
      <span v-if="index != (selectedPinyinList.length - 1)" class="p-3">+</span>
    </div>
  </div>

  <el-divider />

  <div class="d-fex m-3">
    <el-button-group v-for="item in pinyinList" :type="item.btnType" class="p-3" @click="onPinyinSelected(item)">
      <el-button>{{ item.id }}</el-button>
      <el-button>{{ item.value }}</el-button>
    </el-button-group>
  </div>

  <el-divider />

  <div class="d-flex flex-row justify-content-center align-items-center m-1">
    <el-input-number v-model="sum" />
    <el-button :icon="Promotion" @click="calculate" class="ms-3" />
    <el-button :icon="RefreshRight" @click="refreshContent" />
  </div>

  <div class="d-flex flex-row justify-content-center align-items-center m-1">
    <el-rate v-model="rate" size="large" :max="10" />
  </div>
</template>