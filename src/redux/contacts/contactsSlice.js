import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import Notiflix from 'notiflix';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact: {
      reducer: (state, { payload }) => {
        state.push(payload);
        Notiflix.Report.success('Super !', ` New contact added!`, 'Close', {
          svgSize: '200px',
          titleFontSize: '24px',
          messageFontSize: '20px',
          buttonFontSize: '16px',
          width: '300px',
          backOverlay: true,
          backOverlayClickToClose: true,
        });
      },
      prepare: data => {
        return {
          payload: {
            ...data,
            id: nanoid(),
          },
        };
      },
    },
    removeContact: (state, { payload }) =>
      state.filter(({ id }) => id !== payload),
  },
});

export const { addContact, removeContact } = contactsSlice.actions;
export default contactsSlice.reducer;
