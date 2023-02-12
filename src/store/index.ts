import Vue from "vue";
import Vuex from "vuex";
import {
  getMusic,
  likeMusic,
  deleteMusic,
  likePicture,
  getPicture,
  deletePicture,
  getVideo,
  likeVideo,
  deleteVideo,
  getComment
} from "@/utils/api";
import cookie from "js-cookie";
import { IMusic, IPhoto, IVideo } from "@/utils/interface/types";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    auth: "",
    musics: [] as any,
    pictures: [] as any,
    videos: [] as any,
    selectedVideo: {},
    comments: [] as any
  },
  getters: {
    auth(state) {
      let email = state.auth ? state.auth : cookie.get("superstar_email");
      return email;
    },
    musics(state) {
      return state.musics;
    },
    pictures(state) {
      return state.pictures;
    },
    videos(state) {
      return state.videos;
    }
  },
  mutations: {
    setAuthUser(state, email) {
      state.auth = email;
    },
    updateMusics(state, musics) {
      state.musics = musics;
    },
    createMusic(state, music) {
      state.musics.push(music);
    },
    logout(state) {
      state.auth = "";
    },
    likeMusic(state, id: string) {
      const currentState = [...state.musics];

      currentState.find((music: IMusic, index: number) => {
        if (music.id == id) {
          state.musics[index].likes++;
        }
      });
    },
    removeMusic(state, id: string) {
      const currentState = [...state.musics];

      currentState.find((music: IMusic, index: number) => {
        if (music.id == id) {
          state.musics.splice(index, 1);
        }
      });
    },
    updatePictures(state, pictures) {
      state.pictures = pictures;
    },
    createPicture(state, picture) {
      state.pictures.push(picture);
    },
    likePicture(state, id: string) {
      const currentState = [...state.pictures];

      currentState.find((picture: IPhoto, index: number) => {
        if (picture.id == id) {
          state.pictures[index].likes++;
        }
      });
    },
    removePicture(state, id: string) {
      const currentState = [...state.musics];

      currentState.find((picture: IPhoto, index: number) => {
        if (picture.id == id) {
          state.pictures.splice(index, 1);
        }
      });
    },
    updateVideos(state, videos) {
      state.videos = videos;
    },
    selectedVideo(state, videoId) {
      state.videos.find((video: IVideo) => {
        if (video.id == videoId) {
          state.selectedVideo = video;
        }
      });
    },
    likeVideo(state, id: string) {
      const currentState = [...state.videos];

      currentState.find((video: IVideo, index: number) => {
        if (video.id == id) {
          state.videos[index].likes++;
        }
      });
    },
    removeVideo(state, id: string) {
      const currentState = [...state.videos];

      currentState.find((video: IVideo, index: number) => {
        if (video.id == id) {
          state.videos.splice(index, 1);
        }
      });
    },
    updateComment(state, comments) {
      state.comments = comments;
    }
  },
  actions: {
    updateMusics({ commit }) {
      getMusic()
        .then(res => {
          commit("updateMusics", res.data);
        })
        .catch(e => {});
    },
    favouriteMusic({ commit }, payload) {
      const { id, title } = payload;
      likeMusic(id, title)
        .then(res => {
          if (res.data) {
            commit("likeMusic", id);
          }
        })
        .catch(e => {});
    },
    removeMusic({ commit }, payload) {
      const { id, title } = payload;
      deleteMusic(id, title)
        .then(res => {
          if (res.data) {
            commit("removeMusic", id);
          }
        })
        .catch(e => {});
    },
    updatePictures({ commit }) {
      getPicture()
        .then(res => {
          commit("updatePictures", res.data);
        })
        .catch(e => {});
    },
    favouritePicture({ commit }, payload) {
      const { id, caption } = payload;
      likePicture(id, caption)
        .then(res => {
          if (res.data) {
            commit("likePicture", id);
          }
        })
        .catch(e => {});
    },
    removePicture({ commit }, payload) {
      const { id, caption } = payload;
      deletePicture(id, caption)
        .then(res => {
          if (res.data) {
            commit("removePicture", id);
          }
        })
        .catch(e => {});
    },
    updateVideos({ commit }) {
      getVideo()
        .then(res => {
          commit("updateVideos", res.data);
        })
        .catch(e => {});
    },
    selectedVideo({ commit }, payload: string) {
      commit("selectedVideo", payload);
    },
    favouriteVideo({ commit }, payload) {
      const { id, title } = payload;
      likeVideo(id, title)
        .then(res => {
          if (res.data) {
            commit("likeVideo", id);
            commit("selectedVideo", id);
          }
        })
        .catch(e => {});
    },
    removeVideo(context, payload) {
      const { id, title } = payload;
      deleteVideo(id, title)
        .then(res => {
          if (res.data) {
            context.commit("removeVideo", id);
            context.commit("selectedVideo", context.state.videos[0].id);
          }
        })
        .catch(e => {});
    },
    updateComment({ commit }) {
      getComment("video")
        .then(res => {
          commit("updateComment", res.data);
        })
        .catch(e => {});
    },
    logout(context) {
      context.commit("logout");
      context.getters.auth;
    }
  },
  modules: {}
});
