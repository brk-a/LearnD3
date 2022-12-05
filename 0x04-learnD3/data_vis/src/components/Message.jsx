/**
 * Message: parse the data read using D3
 * and provide summary stats about the file
 * @param {any} data 
 * @returns {string} message
 */

const Message = (data) => {
    return `${Math.round(d3.csvFormat(data).length / 1024)}kB\n${data.length} obs\n${data.columns.length} vars`
}

export default Message