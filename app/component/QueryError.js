

export const QueryError = (status) => {
    if(status==="200"){
        console.log("请求成功");
    }
    if(status==="401"){
        alert("请求超时，请重新登陆");
    }
};
