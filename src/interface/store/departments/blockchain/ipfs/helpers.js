import { imgSrcToBlob, blobToArrayBuffer } from 'blob-util'

// File Upload Utility Functions
/**
 * ImageConvertToBuffer
 * @desc Convert a fetched image file to an ArrayBuffer
 * @param {*} fileLocation 
 */
export const ImageConvertToBuffer = async (fileLocation) => {
  const file = await window.fetch(fileLocation)
  const blob = await imgSrcToBlob(file.url)
  const arrayBuffer = await blobToArrayBuffer(blob)
  // return Buffer.from(arrayBuffer)
}

/**
 * FileConvertToJSON
 * @desc Convert a fetched image file to an ArrayBuffer
 * @param {*} file
 */
export  const FileConvertToJSON = async (file) => {

  return file;
}