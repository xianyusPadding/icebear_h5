import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/index/index'
import StudyVideo from '@/views/studyVideo/studyVideo'
import OfferBBS from '@/views/offerBBS/offerBBS'
import Enterprise from '@/views/enterprise/enterprise'
import Wikipedia from '@/views/wikipedia/wikipedia'

Vue.use(Router)

export default new Router({
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
      path: '/enterprise',
      name: 'Enterprise',
      component: Enterprise
    },
    {
      path: '/wikipedia',
      name: 'Wikipedia',
      component: Wikipedia
    }
  ]
})
