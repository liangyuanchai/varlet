<template>
  <app-type>{{ pack.basicAppBar }}</app-type>
  <var-app-bar :title="pack.title" />

  <app-type>{{ pack.customStyle }}</app-type>
  <var-app-bar :title="pack.title" title-position="center" color="#ff9f00" />

  <app-type>{{ pack.addSlotsAtTitle }}</app-type>
  <var-app-bar>{{ pack.addTheTitleFromTheSlot }}</var-app-bar>

  <app-type>{{ pack.addLeftSlot }}</app-type>
  <var-app-bar :title="pack.title" title-position="center">
    <template #left>
      <var-button round text color="transparent" text-color="#ffffff" @click="goBack">
        <var-icon name="chevron-left" :size="24" />
      </var-button>
    </template>
  </var-app-bar>

  <app-type>{{ pack.addRightSlot }}</app-type>
  <var-app-bar :title="pack.title">
    <template #right>
      <var-button round text color="transparent" text-color="#ffffff" @click="searchData">
        <var-icon name="magnify" :size="24" />
      </var-button>
    </template>
  </var-app-bar>

  <app-type>{{ pack.addLeftAndRightSlot }}</app-type>
  <var-app-bar :title="pack.title">
    <template #left>
      <var-button round text color="transparent" text-color="#ffffff" @click="goBack">
        <var-icon name="chevron-left" :size="24" />
      </var-button>
    </template>

    <template #right>
      <var-menu :offset-y="42" :offset-x="-20" v-model:show="offsetY">
        <var-button round text color="transparent" text-color="#ffffff" @click="changeOffset">
          <var-icon name="menu" :size="24" />
        </var-button>

        <template #menu>
          <div class="menu-list" :style="{ background: bgColor }">
            <var-cell class="menu-cell" v-for="value in menuList" :key="value.value" v-ripple>
              {{ value.label }}
            </var-cell>
          </div>
        </template>
      </var-menu>
    </template>
  </var-app-bar>

  <div class="space"></div>
</template>

<script>
import { ref } from 'vue'
import VarAppBar from '..'
import VarIcon from '../../icon'
import AppType from '@varlet/cli/site/mobile/components/AppType'
import Ripple from '../../ripple'
import Snackbar from '../../snackbar'
import VarMenu from '../../menu'
import VarButton from '../../button'
import VarCell from '../../cell'
import dark from '../../themes/dark'
import { pack, use } from './locale'
import { watchLang, watchDarkMode } from '@varlet/cli/site/utils'

export default {
  name: 'AppBarExample',
  directives: { Ripple },
  components: {
    VarAppBar,
    VarIcon,
    VarMenu,
    VarButton,
    VarCell,
    AppType,
  },
  setup() {
    const offsetY = ref(false)
    const menuList = ref([])
    const bgColor = ref('#fff')

    const searchData = () => {
      Snackbar({
        content: pack.value.search,
        position: 'top',
      })
    }

    const goBack = () => {
      Snackbar({
        content: pack.value.goBack,
        position: 'top',
      })
    }

    const changeOffset = () => {
      menuList.value = [
        { label: pack.value.options1, value: 'menu1' },
        { label: pack.value.options2, value: 'menu2' },
      ]

      offsetY.value = true
    }

    watchLang((lang) => {
      use(lang)

      offsetY.value = false
    })

    watchDarkMode(dark, (themes) => {
      bgColor.value = themes === 'darkThemes' ? '#272727' : '#fff'
    })

    return {
      offsetY,
      bgColor,
      menuList,
      pack,
      searchData,
      goBack,
      changeOffset,
    }
  },
}
</script>

<style scoped>
.menu-list .menu-cell {
  display: block;
  padding: 10px;
}

.space {
  height: 80px;
}
</style>
