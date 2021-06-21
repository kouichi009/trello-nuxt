export const state = {
  lists: []
};

export const actions = {
  fetchLists(context) {
    let savedLists = JSON.parse(window.localStorage.getItem("trello-lists"));
    context.commit("fetchLists", savedLists);
  },
  addlist(context, payload) {
    context.commit("addlist", payload);
  },
  removelist(context, payload) {
    context.commit("removelist", payload);
  },
  addCardToList(context, payload) {
    context.commit("addCardToList", payload);
  },
  removeCardFromList(context, payload) {
    context.commit("removeCardFromList", payload);
  }
};
export const mutations = {
  fetchLists(state, payload) {
    state.lists = payload;
  },
  addlist(state, payload) {
    state.lists.push({ title: payload.title, cards: [] });
    window.localStorage.setItem("trello-lists", JSON.stringify(state.lists));
  },
  removelist(state, payload) {
    state.lists.splice(payload.listIndex, 1);
    window.localStorage.setItem("trello-lists", JSON.stringify(state.lists));
  },
  addCardToList(state, payload) {
    state.lists[payload.listIndex].cards.push({ body: payload.body });
    window.localStorage.setItem("trello-lists", JSON.stringify(state.lists));
  },
  removeCardFromList(state, payload) {
    state.lists[payload.listIndex].cards.splice(payload.cardIndex, 1);
    window.localStorage.setItem("trello-lists", JSON.stringify(state.lists));
  }
};
export const getters = {
  totalCardCount(state) {
    let count = 0;
    state.lists.map(content => (count += content.cards.length));
    return count;
  },
  lists(state) {
    return state.lists;
  }
};
