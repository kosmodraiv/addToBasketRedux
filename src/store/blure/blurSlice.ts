import { createSlice } from '@reduxjs/toolkit'
import { BlurState } from './types'

const initialState: BlurState = {
	blured: false
}

const blurSlice = createSlice({
	name: 'blur',
	initialState,
	reducers: {
		toggleBlurred: (state: BlurState) => {
			state.blured = !state.blured
		}
	}
})

export const { toggleBlurred } = blurSlice.actions
export default blurSlice.reducer
