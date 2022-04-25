import axios from 'axios'

// Initializing axios adapter
const adapter = axios.create({
  baseURL: process.env.BASE_API_URI,
  headers: {
    Accept: 'application/json'
  }
})

// Creating the API object by injection the adapter into the API gate
import { apiGate } from '../api-gate'
const api = apiGate(adapter)

export { api }
