import { GET_LAUNCH } from '../types'

export const getLaunch = data => ({
  type: GET_LAUNCH,
  payload: {
    data,
  },
})