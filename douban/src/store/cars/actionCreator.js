import {
	ADD_GOOD_IN_CAR,
	REDUCE_GOOD_IN_CAR
} from './const'

export default {
	//加入购物车的方法
	addGoodInCar (info, fromCars) {
		
		return dispatch => {
			//调用后端的接口，更改了数据库里的数据	
			setTimeout(() => {
				//同步前端store中的数据，发送一个action到reducer中
				dispatch({
					type: ADD_GOOD_IN_CAR,
					info,
					fromCars
				})
				
			}, 500)			
		}
		
	},
	reduceGoodInCar (id) {
		
		return dispatch => {
			//调用后端的接口，		
			setTimeout(() => {
				dispatch({
					type: REDUCE_GOOD_IN_CAR,
					id
				})
				
			}, 500)			
		}
		
	}
	
}
