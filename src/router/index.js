import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/index/index'
import StudyVideo from '@/views/studyVideo/studyVideo'
import OfferBBS from '@/views/offerBBS/offerBBS'
import ApplyJob from '@/views/applyJob/applyJob'
import Wikipedia from '@/views/wikipedia/wikipedia'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/studyVideo',
      name: 'StudyVideo',
      component: StudyVideo
    },
    {
      path: '/offerBBS',
      name: 'OfferBBS',
      component: OfferBBS
    },
    {
      path: '/applyJob',
      name: 'ApplyJob',
      component: ApplyJob
    },
    {
      path: '/wikipedia',
      name: 'Wikipedia',
      component: Wikipedia
    }
  ]
})
