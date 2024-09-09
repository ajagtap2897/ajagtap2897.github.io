import { environment } from "../../environments/environment"

export const getProfilePicUrl= (profile_pic: string | undefined) => {
    return profile_pic? environment.BASE_URL + environment.PATH_TO_IMAGES + profile_pic : ""
}

export const getBaserUrl = () => {
    return environment.BASE_URL
}