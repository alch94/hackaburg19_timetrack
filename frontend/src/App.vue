<template>
  <q-layout id="q-app" view="lHh Lpr lFf">
    <q-layout-header>
      <q-toolbar
        color="primary"
      >
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
          icon="menu"
        />

<!--        <q-toolbar-title>-->
<!--          Quasar App-->
<!--          <div slot="subtitle">Running on Quasar v{{ $q.version }}</div>-->
<!--        </q-toolbar-title>-->
      </q-toolbar>
    </q-layout-header>

    <q-layout-drawer
      v-model="leftDrawerOpen"
      :content-class="$q.theme === 'mat' ? 'bg-grey-2' : null"
    >
      <q-list
              no-border
              link
              inset-delimiter
      >
        <q-list no-border link inset-delimiter>
          <q-list-header>Essential Links</q-list-header>
          <q-item to="/demo">
            <q-item-side icon="android"/>
            <q-item-label>Demo</q-item-label>
          </q-item>
          <q-item to="/table">
            <q-item-side icon="table_chart"/>
            <q-item-label>Table</q-item-label>
          </q-item>
          <q-item to="/durationbarchart">
            <q-item-side icon="bar_chart"/>
            <q-item-label>Duration Bar Chart</q-item-label>
          </q-item>
<!--          <q-list-header>Essential Links</q-list-header>-->
<!--          <q-item @click.native="openURL('http://quasar-framework.org')">-->
<!--            <q-item-side icon="school" />-->
<!--            <q-item-main label="Docs" sublabel="quasar-framework.org"></q-item-main>-->
<!--          </q-item>-->
<!--          <q-item @click.native="openURL('https://discord.gg/5TDhbDg')">-->
<!--            <q-item-side icon="chat" />-->
<!--            <q-item-main label="Discord Chat Channel" sublabel="https://discord.gg/5TDhbDg"></q-item-main>-->
<!--          </q-item>-->
<!--          <q-item @click.native="openURL('http://forum.quasar-framework.org')">-->
<!--            <q-item-side icon="forum" />-->
<!--            <q-item-main label="Forum" sublabel="forum.quasar-framework.org"></q-item-main>-->
<!--          </q-item>-->
<!--          <q-item @click.native="openURL('https://twitter.com/quasarframework')">-->
<!--            <q-item-side icon="rss feed" />-->
<!--            <q-item-main label="Twitter" sublabel="@quasarframework"></q-item-main>-->
<!--          </q-item>-->
        </q-list>
      </q-list>
    </q-layout-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'

export default {
  name: 'LayoutDefault',
  data () {
    return {
      // leftDrawerOpen: false
      leftDrawerOpen: this.$q.platform.is.desktop
    }
  },
  methods: {
    openURL
  }
}
</script>

<style>
</style>
