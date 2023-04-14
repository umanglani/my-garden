import dayjs from 'dayjs';

export const TodayDate = () => {
    return dayjs().format('DD MMM YYYY');
}

export const CurrentUser = {
    name: 'Trinity Basse'
}
