/* eslint-disable import/no-cycle */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "../store";
import { actions } from "react-table";

export interface GlobalState {
  open: boolean;
  transcript: any;
  audioFile: string | null;
  darkMode: boolean;
  transcriptId: string | number | null;
  settings: boolean;
  openUploadPortal: boolean;
  lastEditedIndex: number | null;
  showButton: boolean;
  globalAudioFileName: string;
  searchTranscript: string;
  searchMatches: { sectionIndex: number; wordIndex: number }[];
  currentMatchIndex: number;
  showSearchInput: boolean;
}

const initialState: GlobalState = {
  open: false,
  audioFile: null,
  darkMode: false,
  transcriptId: null,
  settings: false,
  transcript: null,
  openUploadPortal: false,
  lastEditedIndex: null,
  showButton: false,
  globalAudioFileName: "",
  searchTranscript: "",
  searchMatches: [],
  currentMatchIndex: 0,
  showSearchInput: false,
};

export const GlobalSlice = createSlice({
  initialState,
  name: "globalstate",
  reducers: {
    setOpen: (state, action) => {
      state.open = action.payload;
    },
    setTranscriptId: (state, action) => {
      state.transcriptId = action.payload;
    },
    setSearchTranscript: (state, action) => {
      state.searchTranscript = action.payload;
    },
    setLastEditedIndex: (state, action) => {
      state.lastEditedIndex = action.payload;
    },
    setShowScrollBtn: (state, action) => {
      state.showButton = action.payload;
    },
    resetEdit: (state) => {
      state.showButton = false;
    },
    setAudioFilePath: (state, action) => {
      state.audioFile = action.payload;
    },
    setDarkMode: (state, action) => {
      state.darkMode = action.payload;
    },
    setOpenUploadPortal: (state, action) => {
      state.openUploadPortal = action.payload;
    },
    setSettings: (state, action) => {
      state.settings = action.payload;
    },
    setGlobalAudioFileName: (state, action) => {
      state.globalAudioFileName = action.payload;
    },
    setSearchMatches: (
      state,
      action: PayloadAction<{ sectionIndex: number; wordIndex: number }[]>
    ) => {
      state.searchMatches = action.payload;
      state.currentMatchIndex = 0;
    },
    setCurrentMatch: (state, action: PayloadAction<number>) => {
      state.currentMatchIndex = action.payload;
    },
    setShowSearchInput: (state, action) => {
      state.showSearchInput = action.payload;
    },
  },
});

export const {
  setOpen,
  setOpenUploadPortal,
  setDarkMode,
  setTranscriptId,
  setSettings,
  setAudioFilePath,
  setLastEditedIndex,
  setShowScrollBtn,
  resetEdit,
  setGlobalAudioFileName,
  setSearchTranscript,
  setCurrentMatch,
  setSearchMatches,
  setShowSearchInput,
} = GlobalSlice.actions;

export const SelectOpenState = (state: RootState) => state.globalstate.open;
export const selectTranscriptId = (state: RootState) =>
  state.globalstate.transcriptId;
export const selectDarkmode = (state: RootState) => state.globalstate.darkMode;
export const selectAudioFile = (state: RootState) =>
  state.globalstate.audioFile;
export const selectGlobalAudioName = (state: RootState) =>
  state.globalstate.globalAudioFileName;
export const showScrolBtn = (state: RootState) => state.globalstate.showButton;
export const selectEditedIndex = (state: RootState) =>
  state.globalstate.lastEditedIndex;
export const showUploadPortal = (state: RootState) =>
  state.globalstate.openUploadPortal;
export const showSettings = (state: RootState) => state.globalstate.settings;
export const searchMatches = (state: RootState) =>
  state.globalstate.searchMatches;
export const selectCurrentMatch = (state: RootState) =>
  state.globalstate.currentMatchIndex;
export const searchtranscript = (state: RootState) =>
  state.globalstate.searchTranscript;
export const searchInput = (state: RootState) =>
  state.globalstate.showSearchInput;
export const GlobalReducer = GlobalSlice.reducer;
