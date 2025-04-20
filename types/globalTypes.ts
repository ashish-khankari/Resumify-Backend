export interface errorTypes {
    success: number,
    invalidRequest: number,
    serverError: number,
    notFound: number,
    accessDenied: number,
}

export interface errorFunction {
    status: number,
    message: string,
    res?: {} | [] | null,
    token?: string
 }