import mock from '../mock/mock'

function Request(url){
    return new Promise(res=>{
        res(mock[url]())
    })
}

export default Request