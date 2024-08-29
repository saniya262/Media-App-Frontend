import { commonAPI } from "./commonAPI";
import { SERVER_url } from "./server_url";

// upload video

export const uploadVideoAPI=async(video)=>{
    return await commonAPI ("POST",`${SERVER_url}/allVideos`,video)
}


// get allUploadedVideos

export const getAllUploadedVideosAPI=async()=>{
    return await commonAPI("GET",`${SERVER_url}/allVideos`,"")
}

// get A video

export const getAVideoAPI=async(id)=>{
    return await commonAPI("GET",`${SERVER_url}/allVideos/${id}`,"")
}
// delete video

export const deleteVideosAPI=async(id)=>{
    return await commonAPI("DELETE",`${SERVER_url}/allVideos/${id}`,{})
}

// addVideo History

export const addVideoHistoryAPI=async(video)=>{
    return await commonAPI("POST",`${SERVER_url}/history`,video)
}

// getHistory

export const getVideoHistoryAPI=async()=>{
    return await commonAPI("GET",`${SERVER_url}/history`,"")
}

// delete History

export const deleteHistoryAPI = async(id)=>{
    return await commonAPI("DELETE",`${SERVER_url}/history/${id}`,{})
}


// add videos category
export const addVideoCategoryAPI=async(category)=>{
    return await commonAPI("POST",`${SERVER_url}/category`,category)
}


// get category

export const getVideoCategoryAPI=async()=>{
    return await commonAPI("GET",`${SERVER_url}/category`,"")
}

// delete category

export const deleteCategoryAPI=async(id)=>{
    return await commonAPI("DELETE",`${SERVER_url}/category/${id}`,{})
}

// update category

export const updateCategoryAPI=async(id,categoryDetails)=>{
    return await commonAPI("PUT",`${SERVER_url}/category/${id}`,categoryDetails)
}