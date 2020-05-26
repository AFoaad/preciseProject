import axios from 'axios';

const baseURL = "https://www.googleapis.com/calendar/v3/calendars/";

const API_KEY = "AIzaSyCortaQOoCeXnRuiOEd_HF7TNOB1zAUC0M";

const Base_Api = axios.create({
    baseURL
})

export {
    API_KEY,
    Base_Api
}