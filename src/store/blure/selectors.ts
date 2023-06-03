import { RootState } from '../store'
import { BlurState } from './types'

export const selectBlured = (state: RootState): BlurState => state.blur
