import {useState, useCallback} from 'react';
import {requestHolidays} from '../api';



const useGetHolidays = () => {

    const [countryCode, setCountryCode] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [data, setData] = useState();

    const onChange = useCallback(
        (val) => {
            let code = val.toLowerCase();
            setCountryCode(code);
        },
        [setCountryCode , countryCode]
    );
    const handleHolidays = useCallback(
        async () => {
            setLoading(true);
            const response = await requestHolidays(countryCode);
            setData(response.items);
            setLoading(false);
        },
        [
            setLoading,
            setData,
            countryCode,
            requestHolidays
        ]
    );


    return {
        countryCode,
        loading,
        data,
        onChange,
        handleHolidays
    };

};

export default useGetHolidays;