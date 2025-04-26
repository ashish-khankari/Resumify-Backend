import { errorTypes } from "../types/globalTypes";

const errorStatus: errorTypes = {
    success: 200,
    invalidRequest: 400,
    serverError: 500,
    notFound: 404,
    accessDenied: 403,
};

export default errorStatus;
