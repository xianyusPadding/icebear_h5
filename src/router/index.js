import Vue from 'vue'
import Router from 'vue-router'
import Navbar from '@/components/navbar'
import StudyVideo from '@/components/studyVideo'
import OfferBBS from '@/components/offerBBS'
import Enterprise from '@/components/enterprise'
import Wikipedia from '@/components/wikipedia'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Navbar',
      component: Navbar
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
