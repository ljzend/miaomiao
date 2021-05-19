<template>
  <div id="main">
    <Header title="喵喵影院"></Header>
    <div id="content">
      <div class="cinema_menu">
        <router-link to="/cinema/city" tag="div" activeClass="active" class="city_switch">
          全城 <i class="iconfont icon-lower-triangle"></i>
        </router-link>
        <router-link to="/cinema/brand" tag="div" activeClass="active" class="brand_swtich">
          品牌 <i class="iconfont icon-lower-triangle"></i>
        </router-link>
        <router-link to="/cinema/feature" tag="div" activeClass="active" class="feature_switch">
          特色 <i class="iconfont icon-lower-triangle"></i>
        </router-link>
      </div>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
      <CinemaList></CinemaList>
    </div>
    <TabBar></TabBar>
  </div>
</template>

<script>
import Header from '@/components/Header/Header.vue'
import TabBar from '@/components/TabBar/TabBar.vue'
import CinemaList from '@/components/CinemaList/CinemaList.vue'

export default {
  name: 'Cinema',

  components: {
    Header,
    TabBar,
    CinemaList
  }
}
</script>

<style scoped>
#content .cinema_menu{ width: 100%; height: 45px; border-bottom:1px solid #e6e6e6; display: flex; justify-content:space-around; align-items:center; background:white;}
</style>
