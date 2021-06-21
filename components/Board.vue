<template>
  <div>
    <header>
      Trello Nuxt.js
    </header>
    <main>
      <!-- <p class="info-line">All: 0 tasks</p> -->
      <p class="info-line">All: {{ totalCardCount }} tasks</p>
      <div class="list-index">
        <List
          v-for="(item, index) in lists"
          :key="item.id"
          :title="item.title"
          :cards="item.cards"
          :listIndex="index"
          @change="movingCard"
        />
        <ListAdd />
      </div>
    </main>
  </div>
</template>
<script>
import ListAdd from "./ListAdd.vue";
import List from "./List";

export default {
  mounted() {
    this.$store.dispatch("fetchLists");
  },
  components: {
    ListAdd,
    List
  },
  computed: {
    lists() {
      return this.$store.getters.lists;
    },
    totalCardCount() {
      return this.$store.getters.totalCardCount;
    }
  },
  methods: {
    movingCard: function() {
      this.$store.dispatch("updateList", { lists: this.lists });
    },
    movingList: function() {
      this.$store.dispatch("updateList", { lists: this.lists });
    }
  }
};
</script>
