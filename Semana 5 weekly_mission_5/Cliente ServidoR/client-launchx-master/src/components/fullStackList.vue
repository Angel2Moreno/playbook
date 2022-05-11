<template>
  <div class="list row">
    <div class="col-md-6">
      <h4> fullstacks Inscritos </h4>
      <ul class="list-group">
        <li class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(fullstack, index) in fullstack"
          :key="index"
          @click="setActiveFullStack(fullstack, index)"
        >
          {{ fullstack.username }}
        </li>

      </ul>
    </div>
    <div class="col-md-6">
      <div v-if="currentFullStack">
        <h4>fullstacks</h4>
        <div>
          <br><label><strong>Nombre:</strong></label> {{ currentFullStack.name}}
          <br><label><strong>Username:</strong></label> {{ currentFullStack.username}}
          <br><label><strong>Main:</strong></label> {{ currentFullStack.main}}
        </div>
        <router-link :to="'/fullstack/' + currentFullStack.id" class="btn btn-info"> Editar</router-link>
      </div>
      <div v-else>
        <br />
        <p> Selecciona un fullstack.</p>
      </div>
    </div>
  </div>
</template>
<script>

import FullStackService from "../services/FullStackService";

export default {
  name: "fullStack-list",
  data() {
    return {
      tutorials: [],
      explorers: [],
      currentTutorial: null,
      currentExplorer: null,
      currentIndex: -1,
      title: "",
      explorerId: ""
    };
  },
  methods: {
    getAllFullStack(){
      FullStackService.getAll()
        .then(response => {
          this.fullStacks = response.data;
        })
        .catch(e => {
          console.log(e);
        });
    },
    setActiveFullStack(fullstack, index) {
      this.currentFullStack= fullstack;
      this.currentIndex = fullstack? index : -1;
    }
  },
  mounted() {
    this.getAllFullStack();
  }
};
</script>
