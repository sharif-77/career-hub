const getDatafromlocalStorage = ()=>{
    let data=localStorage.getItem('applied-Id')
    if (data) {
        return JSON.parse(data)
    } else {
        return []
    }
}

const setDataToLocalstorage = (id)=>{
    localStorage.setItem('applied-Id',JSON.stringify(id))

}

export {getDatafromlocalStorage,setDataToLocalstorage}