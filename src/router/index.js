import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import StudyVideo from '@/components/studyVideo'
import OfferBBS from '@/components/offerBBS'
import Enterprise from '@/components/enterprise'
import Wikipedia from '@/components/wikipedia'

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
