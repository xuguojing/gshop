import  axios from 'axios'
/*
返回值是promise对象
*/
/* export default function ajax(url,data={},type='GET'){
    return new Promise(function(resolve,reject){
		let promise
		if(type === 'GET'){   //拼接获取数据中 变成url形式
			let dataStr = ''
			Object.keys(data).forEach(key =>{
				dataStr += key + '=' + data[key] + '&'
			})
			if(dataStr !== ''){
				dataStr = dataStr.substring(0,dataStr.lastIndexOf('&'))
				url = url + '?' + dataStr
			}
			promise = axios.get(url)
		}else{
			promise = axios.pose(url,data)
		}
	
	promise.then(response => {
		resolve(response.data)
	})
	  .catch(error =>{
		  reject(error)
	  })
})
} */

export default function ajax(url,data={},type='GET'){
	return new Promise(function(resolve,reject){
		let promise 
		if(type === 'GET'){//拼接
			let dataStr = ''
			Object.keys(data).forEach(key =>{
				dataStr += key + '=' + data[key] + '&'
			})
		 if(dataStr !== ''){
			 dataStr = dataStr.substring(0,dataStr.lastIndexOf('&'))
			 url = url + '?' + dataStr
		 }
		 promise =   axios.get(url)
		}else{
		 promise =   axios.post(url,data)
		}
		
		  promise.then(response => {
			  resolve(response.data)
		  })
		    .catch(error =>{
				reject(error)
			})
	})
}