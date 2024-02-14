import {getRequestConfig} from "next-intl/server";
import deepmerge from "deepmerge";

export default getRequestConfig(async ({locale}) => {
    return {
        messages: deepmerge(
            (await import(`../messages/en.json`)).default,
            (await import(`../messages/${locale}.json`)).default
        )
    }
});