import {Base_Api, API_KEY} from '../../config';


export const requestHolidays = async (
    countryCode : string
) => {
    try {
        const response = await Base_Api.get(
            `en.${countryCode}%23holiday%40group.v.calendar.google.com/events?key=${API_KEY}`
        );
        return response.data;
    } catch (error) {
        return error;
    }
};