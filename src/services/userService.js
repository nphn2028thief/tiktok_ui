import * as httpRequest from '~/utils/httpRequest';

const getSuggested = async ({ page, perPage }) => {
    try {
        const res = await httpRequest.get('users/suggested', {
            params: {
                page: page,
                per_page: perPage,
            },
        });

        return res.data;
    } catch (error) {
        console.log(error);
    }
};

export { getSuggested };
