import * as httpRequest from '~/utils/httpRequest';

const getFollowed = async ({ page }) => {
    try {
        const res = await httpRequest.get('me/followings', {
            params: {
                page: page,
            },
        });

        return res.data;
    } catch (error) {
        console.log(error);
    }
};

export { getFollowed };
